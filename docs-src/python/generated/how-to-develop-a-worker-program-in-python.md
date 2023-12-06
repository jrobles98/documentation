---
id: how-to-develop-a-worker-program-in-python
title: How to develop a Worker Program in Python
sidebar_label: Worker Program
description: Create a new instance of a Worker.
tags:
- worker
- python sdk
- code sample
---

<!-- DO NOT EDIT THIS FILE DIRECTLY.
THIS FILE IS GENERATED from https://github.com/temporalio/documentation-samples-python/blob/develop-patching/your_app/run_worker_dacx.py. -->

To develop a Worker, use the `Worker()` constructor and add your Client, Task Queue, Workflows, and Activities as arguments.
The following code example creates a Worker that polls for tasks from the Task Queue and executes the Workflow.
When a Worker is created, it accepts a list of Workflows in the workflows parameter, a list of Activities in the activities parameter, or both.

<div class="copycode-notice-container"><div class="copycode-notice"><img data-style="copycode-icon" src="/icons/copycode.png" alt="Copy code icon" /> Sample application code information <img id="i-182c3af1-0776-42e9-820c-62d4af61cd53" data-event="clickable-copycode-info" data-style="chevron-icon" src="/icons/chevron.png" alt="Chevron icon" /></div><div id="copycode-info-182c3af1-0776-42e9-820c-62d4af61cd53" class="copycode-info">The following code sample comes from a working and tested sample application. The code sample might be abridged within the guide to highlight key aspects. Visit the source repository to <a href="https://github.com/temporalio/documentation-samples-python/blob/develop-patching/your_app/run_worker_dacx.py">view the source code</a> in the context of the rest of the application code.</div></div>

```python

from temporalio.client import Client
from temporalio.worker import Worker
# ...
# ...
async def main():
    client = await Client.connect("localhost:7233")
    worker = Worker(
        client,
        task_queue="your-task-queue",
        workflows=[YourWorkflow],
        activities=[your_activity],
    )
    await worker.run()


if __name__ == "__main__":
    asyncio.run(main())
```
