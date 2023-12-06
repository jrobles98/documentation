---
id: how-to-list-workflow-executions-using-the-client-in-python
title: How to list Workflows in Python
sidebar_label: List Workflows
description: To list Workflows from the Client, use the [list_workflows()](https://python.temporal.io/temporalio.client.Client.html#list_workflows) method on the Client handle and pass a [List Filter](/concepts/what-is-a-list-filter) as an argument to filter the listed Workflows.
tags:
- workflow
- client
- python sdk
- code sample
---

<!-- DO NOT EDIT THIS FILE DIRECTLY.
THIS FILE IS GENERATED from https://github.com/temporalio/documentation-samples-python/blob/develop-patching/your_visibility/starter_dacx.py. -->

Use the [list_workflows()](https://python.temporal.io/temporalio.client.Client.html#list_workflows) method on the Client handle and pass a [List Filter](/concepts/what-is-a-list-filter) as an argument to filter the listed Workflows.

<div class="copycode-notice-container"><div class="copycode-notice"><img data-style="copycode-icon" src="/icons/copycode.png" alt="Copy code icon" /> Sample application code information <img id="i-20bb5ef5-86a0-40f6-8349-ce57d3fa0d36" data-event="clickable-copycode-info" data-style="chevron-icon" src="/icons/chevron.png" alt="Chevron icon" /></div><div id="copycode-info-20bb5ef5-86a0-40f6-8349-ce57d3fa0d36" class="copycode-info">The following code sample comes from a working and tested sample application. The code sample might be abridged within the guide to highlight key aspects. Visit the source repository to <a href="https://github.com/temporalio/documentation-samples-python/blob/develop-patching/your_visibility/starter_dacx.py">view the source code</a> in the context of the rest of the application code.</div></div>

```python

# ...
    async for workflow in client.list_workflows('WorkflowType="GreetingWorkflow"'):
        print(f"Workflow: {workflow.id}")
```
