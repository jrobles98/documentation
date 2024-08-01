const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const ProgressBar = require('progress');
const axios = require('axios');

async function checkUrl(url, anchor) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    return $(`#${anchor}`).length > 0 || $(`a[name="${anchor}"]`).length > 0;
  } catch (error) {
    console.error(`Error checking URL: ${url} - ${error.message}`);
    return false;
  }
}

function checkForBrokenAnchors(filePath, basePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const $ = cheerio.load(content);
  let brokenAnchors = new Set();

  function anchorExists(fileContent, anchor) {
    const $ = cheerio.load(fileContent);
    return $(`#${anchor}`).length > 0 || $(`a[name="${anchor}"]`).length > 0;
  }

  function resolveFilePath(file) {
    if (!file) {
      return filePath;
    } else if (file.startsWith('/')) {
      const resolvedPath = path.join(basePath, file);
      return (fs.existsSync(resolvedPath) && fs.lstatSync(resolvedPath).isDirectory()) || (!resolvedPath.endsWith('.html') && !resolvedPath.endsWith('.htm'))
        ? path.join(resolvedPath, 'index.html')
        : resolvedPath;
    } else {
      const resolvedPath = path.resolve(path.dirname(filePath), file);
      return (fs.existsSync(resolvedPath) && fs.lstatSync(resolvedPath).isDirectory()) || (!resolvedPath.endsWith('.html') && !resolvedPath.endsWith('.htm'))
        ? path.join(resolvedPath, 'index.html')
        : resolvedPath;
    }
  }

  $('a[href*="#"]').each(async (i, elem) => {
    const href = $(elem).attr('href');
    const [file, anchor] = href.split('#');
    if (anchor) {
      if (href.startsWith('http')) {
        const isValid = await checkUrl(file, anchor);
        if (!isValid) {
          brokenAnchors.add(href);
        }
      } else {
        const fileToCheck = resolveFilePath(file);
        if (fs.existsSync(fileToCheck) && fs.lstatSync(fileToCheck).isFile()) {
          const fileContent = fs.readFileSync(fileToCheck, 'utf8');
          if (!anchorExists(fileContent, anchor)) {
            brokenAnchors.add(href);
          }
        } else {
          brokenAnchors.add(href);
        }
      }
    }
  });

  return { brokenAnchors: Array.from(brokenAnchors) };
}

function getTotalHtmlFiles(directory) {
  let totalFiles = 0;
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      totalFiles += getTotalHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      totalFiles++;
    }
  });

  return totalFiles;
}

async function scanDirectory(directory, basePath, bar) {
  let totalBrokenAnchors = new Set();
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      const result = await scanDirectory(filePath, basePath, bar);
      result.brokenAnchors.forEach(anchor => totalBrokenAnchors.add(anchor));
    } else if (file.endsWith('.html')) {
      const result = checkForBrokenAnchors(filePath, basePath);
      result.brokenAnchors.forEach(anchor => totalBrokenAnchors.add(anchor));
      bar.tick();
    }
  }

  return { brokenAnchors: Array.from(totalBrokenAnchors) };
}

async function main() {
  const basePath = path.join(process.cwd(), 'build');
  const totalHtmlFiles = getTotalHtmlFiles(basePath);
  console.log(`Auditing broken anchors. Please be patient.`);
  const bar = new ProgressBar('Checking [:bar] :percent ', { total: totalHtmlFiles });

  const result = await scanDirectory(basePath, basePath, bar);

  result.brokenAnchors.forEach(anchor => {
    console.log(`Broken anchor: ${anchor}`);
  });

  console.log(`Broken anchors found: ${result.brokenAnchors.length}`);

  if (result.brokenAnchors.length > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

main();
