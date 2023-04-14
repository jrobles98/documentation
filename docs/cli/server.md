---
id: server
title: Temporal CLI server command reference
sidebar_label: server
description: How to use the Temporal CLI server command
toc_max_heading_level: 4
---

<!-- THIS FILE IS GENERATED. DO NOT EDIT THIS FILE DIRECTLY -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Server commands allow you to start and manage the <a class="tdlp" href="/clusters#temporal-server">Temporal Server<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">What is the Temporal Server?</span><br /><br /><span class="tdlppd">The Temporal Server is a grouping of four horizontally scalable services.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/clusters#temporal-server">Learn more</a></span></span></a> from the command line.

Currently, `cli` server functionality extends to starting the Server.

## start-dev

The `temporal server start-dev` command starts the Temporal Server on `localhost:7233`.
The results of any command run on the Server can be viewed at http://localhost:7233.

- <a class="tdlp" href="/cli/cmd-options#config">--config<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  config</span><br /><br /><span class="tdlppd">Definition for the config command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#config">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#db-filename">--db-filename<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  db-filename</span><br /><br /><span class="tdlppd">Definition for the db-filename command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#db-filename">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#dynamic-config-value">--dynamic-config-value<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  dynamic-config-value</span><br /><br /><span class="tdlppd">Definition for the dynamic-config-value command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#dynamic-config-value">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#headless">--headless<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  headless</span><br /><br /><span class="tdlppd">Definition for the headless command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#headless">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#ip">--ip<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  ip</span><br /><br /><span class="tdlppd">Definition for the ip command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#ip">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#log-format">--log-format<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  log-format</span><br /><br /><span class="tdlppd">Definition for the log-format command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#log-format">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#log-level">--log-level<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  log-level</span><br /><br /><span class="tdlppd">Definition for the log-level command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#log-level">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#metrics-port">--metrics-port<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  metrics-port</span><br /><br /><span class="tdlppd">Definition for the metrics-port command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#metrics-port">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#namespace">--namespace<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  namespace</span><br /><br /><span class="tdlppd">Definition for the namespace command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#namespace">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#port">--port<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  port</span><br /><br /><span class="tdlppd">Definition for the port command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#port">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#sqlite-pragma">--sqlite-pragma<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  sqlite-pragma</span><br /><br /><span class="tdlppd">Definition for the sqlite-pragma command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#sqlite-pragma">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#ui-asset-path">--ui-asset-path<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  ui-asset-path</span><br /><br /><span class="tdlppd">Definition for the ui-asset-path command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#ui-asset-path">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#ui-codec-endpoint">--ui-codec-endpoint<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  ui-codec-endpoint</span><br /><br /><span class="tdlppd">Definition for the ui-codec-endpoint command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#ui-codec-endpoint">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#ui-ip">--ui-ip<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  ui-ip</span><br /><br /><span class="tdlppd">Definition for the ui-ip command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#ui-ip">Learn more</a></span></span></a>

- <a class="tdlp" href="/cli/cmd-options#ui-port">--ui-port<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><span class="tdlpc"><span class="tdlppt">temporal  ui-port</span><br /><br /><span class="tdlppd">Definition for the ui-port command option.</span><span class="tdlplm"><br /><br /><a class="tdlplma" href="/cli/cmd-options#ui-port">Learn more</a></span></span></a>
