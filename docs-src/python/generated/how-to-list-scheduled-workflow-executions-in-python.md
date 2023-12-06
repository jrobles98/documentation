---
id: how-to-list-scheduled-workflow-executions-in-python
title: How to list Scheduled Workflow Executions in Python
sidebar_label: List Scheduled Workflow Executions
description: Use `list_schedules()` on the Client to list all Workflow Execution in the Python SDK.
tags:
- scheduled workflow execution
- schedules
- python sdk
- code sample
---

<!-- DO NOT EDIT THIS FILE DIRECTLY.
THIS FILE IS GENERATED from https://github.com/temporalio/documentation-samples-python/blob/develop-patching/schedule_your_workflow/list_schedule_dacx.py. -->

To list all schedules, use the [list_schedules()](https://python.temporal.io/temporalio.client.Client.html#list_schedules) asynchronous method on the Client.
If a schedule is added or deleted, it may not be available in the list immediately.

<div class="copycode-notice-container"><div class="copycode-notice"><img data-style="copycode-icon" src="/icons/copycode.png" alt="Copy code icon" /> Sample application code information <img id="i-ff753e11-b99e-4a81-aaac-0641cc9dcbb1" data-event="clickable-copycode-info" data-style="chevron-icon" src="/icons/chevron.png" alt="Chevron icon" /></div><div id="copycode-info-ff753e11-b99e-4a81-aaac-0641cc9dcbb1" class="copycode-info">The following code sample comes from a working and tested sample application. The code sample might be abridged within the guide to highlight key aspects. Visit the source repository to <a href="https://github.com/temporalio/documentation-samples-python/blob/develop-patching/schedule_your_workflow/list_schedule_dacx.py">view the source code</a> in the context of the rest of the application code.</div></div>

```python

# ...
async def main() -> None:
    client = await Client.connect("localhost:7233")
    async for schedule in await client.list_schedules():
        print(f"List Schedule Info: {schedule.info}.")
```
