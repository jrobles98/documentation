---
id: admin
title: tctl v1.17 admin command reference
sidebar_label: admin
description: How to use the tctl v1.17 admin command
toc_max_heading_level: 4
---

<!-- THIS FILE IS GENERATED. DO NOT EDIT THIS FILE DIRECTLY -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

A `tctl admin` command allows the user to run admin operations.

Modifiers:

- Help: `tctl admin [--help | -h]`

## cluster

The `tctl admin cluster` command runs the administrator-level operations on a given Cluster.

`tctl admin cluster command [command modifiers] [arguments...]`

- <a class="tdlp" href="#add_search_attributes">`add_search_attributes`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin cluster add_search_attributes</p><p class="tdlppd">Adding custom Search Attributes to a Cluster.</p><p class="tdlplm"><a class="tdlplma" href="#add_search_attributes">Learn more</a></p></div></a>
- <a class="tdlp" href="#remove_search_attributes">`remove_search_attributes`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin cluster remove_search_attributes</p><p class="tdlppd">Removing custom search metadat from a Cluster.</p><p class="tdlplm"><a class="tdlplma" href="#remove_search_attributes">Learn more</a></p></div></a>
- <a class="tdlp" href="#get_search_attributes">`get_search_attributes`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin cluster get_search_attributes</p><p class="tdlppd">Showing existing search attributes.</p><p class="tdlplm"><a class="tdlplma" href="#get_search_attributes">Learn more</a></p></div></a>
- <a class="tdlp" href="#describe">`describe`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin cluster describe</p><p class="tdlppd">Displaying Cluster information.</p><p class="tdlplm"><a class="tdlplma" href="#describe">Learn more</a></p></div></a>
- <a class="tdlp" href="#list">`list`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin cluster list</p><p class="tdlppd">Listing Cluster information.</p><p class="tdlplm"><a class="tdlplma" href="#list">Learn more</a></p></div></a>
- <a class="tdlp" href="#upsert_remote_cluster">`upsert_remote_cluster`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin cluster upsert_remote_cluster</p><p class="tdlppd">How to run admin-level tctl commands.</p><p class="tdlplm"><a class="tdlplma" href="#upsert_remote_cluster">Learn more</a></p></div></a>
- <a class="tdlp" href="#upsert_remote_cluster">`remove_remote_cluster`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin cluster upsert_remote_cluster</p><p class="tdlppd">How to run admin-level tctl commands.</p><p class="tdlplm"><a class="tdlplma" href="#upsert_remote_cluster">Learn more</a></p></div></a>

### add_search_attributes

The `tctl admin cluster add-search-attributes` command allows Search Attributes to be added to a Cluster.
Custom Search Attributes can be used to make a Cluster more identifiable.

:::note
Due to Elasticsearch limitations, you can only add new custom Search Attributes. Existing Search Attributes cannot be renamed or removed from the Elasticsearch index.
:::

Use this command to add custom Search Attributes to your Temporal Cluster:

```bash
tctl admin cluster add-search-attributes --name <SearchAttributeName> --type <SearchAttributeValueType>
```

:::note
If you are adding custom Search Attributes to a Cluster running from the `docker-compose-es.yml` file in the [temporalio/docker-compose](https://github.com/temporalio/docker-compose) repo, make sure to increase the Docker memory to more than 6 GB.
:::

#### --skip_schema_update

Allows the user to skip the Elasticsearch index schema update.

:::note
This will only register in metadata.
:::

#### --name

The name of the Search Attribute to add. Names can have multiple values.

Search Attribute names are case sensitive.

#### --type

The type of Search Attribute to add.
Multiple values can be added at once.

Values: Text, Keyword, Int, Double, Bool, Datetime

### describe

The `tctl admin cluster describe` command provides information for the current Cluster.

The following modifier changes the behavior of the command:

#### --cluster_value

The name of the remote Cluster within the current Cluster.

This modifier is optional, and can default to the return of current Cluster information.

### get_search_attributes

The `tctl admin cluster get_search_attributes` command retrieves existing Search Attributes for a given Cluster.

The following modifier will change the behavior of the command:

#### --print_json

Prints the existing search attributes in JSON format.

### list

The `tctl admin cluster list` command lists Cluster information on the given Cluster.

Default: 100

The modifier below changes the behavior of the command:

#### --pagesize

The size of the page that the list is printed on.

### remove_remote_cluster

The `tctl admin cluster remove_remote_cluster` command removes remote Cluster information on the given Cluster.

The modifier below changes the behavior of the operation:

#### --cluster

The name of the remote Cluster to remove.

### remove_search_attributes

> The Temporal tctl documentation covers version 1.17 of the Temporal CLI.

The `tctl admin cluster remove-search-attributes` command removes custom Search Attribute metadata from a Cluster.
This operation has no effect on Elasticsearch index schema.

Use the following command to remove a <a class="tdlp" href="/visibility#search-attribute">Search Attribute<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">What is a Search Attribute?</p><p class="tdlppd">A Search Attribute is an indexed name used in List Filters to filter a list of Workflow Executions that have the Search Attribute in their metadata.</p><p class="tdlplm"><a class="tdlplma" href="/visibility#search-attribute">Learn more</a></p></div></a> from a Cluster's metadata:

```bash
tctl admin cluster remove-search-attributes --name <SearchAttributeKey>
```

Only custom Search Attributes can be removed from a Cluster's metadata.
Default Search Attributes cannot be removed.

Removing a Search Attribute removes it from the Cluster's metadata but does not remove it from the Elasticsearch index.
This means that the Search Attribute can be added back later as the same type.
After a Search Attribute has been added to the Elasticsearch index, it cannot be changed.

The following modifier changes the behavior of the operation:

#### --name

Name of the Search Attribute to remove.

### upsert_remote_cluster

The `tctl admin cluster upsert_remote_cluster` command adds or updates remote Cluster information in the current Cluster.

#### --frontend_address

The remote Cluster frontend address.

#### --enable_connection

Enables remote Cluster connection.

## db

The `tctl admin db` command runs administrator-level operations on a given database.

### Usage

`tctl admin db command [command modifiers] [arguments...]`

### Commands

- <a class="tdlp" href="#scan">tctl admin db scan<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin db scan</p><p class="tdlppd">Scanning for corrupted executions in a database</p><p class="tdlplm"><a class="tdlplma" href="#scan">Learn more</a></p></div></a>
- <a class="tdlp" href="#clean">tctl admin db clean<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin db clean</p><p class="tdlppd">How to clean up corrupted Workflows using tctl.</p><p class="tdlplm"><a class="tdlplma" href="#clean">Learn more</a></p></div></a>

### clean

The `tctl admin db clean` command cleans corrupted [Workflow Executions](/workflows/#workflow-executions) from the targeted database.

The modifiers below change the behavior of the command.

#### --db_engine

Type of DB engine to use

Default: `cassandra`
Value: `cassandra` | `mysql` | `postgres`

#### --db_address

Persistence address for the database.

Default: 127.0.0.1

#### --db_port

Persistence port for the DB.

Default: 9042

#### --username

Database username.

#### --password

Database password.

#### --keyspace

Database keyspace

Default: "temporal"

#### --input_directory

The directory which contains the corrupted [Workflow Execution](/workflows/#workflow-executions) files from running <a class="tdlp" href="#scan">`scan`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin db scan</p><p class="tdlppd">Scanning for corrupted executions in a database</p><p class="tdlplm"><a class="tdlplma" href="#scan">Learn more</a></p></div></a>.

#### --lower_shard_bound

The minimum amount (inclusive) of corrupt shards to handle.

Default: 0

#### --upper_shard_bound

The maximum amount (exclusive) of corrupt shards to handle.

Default: 16384

#### --starting_rps

starting rps of database queries.

Default: 100

#### --rps

Target rps of database queries.

Default: 7000

#### --concurrency

Number of threads to handle a scan.

Default: 1000

#### --report_rate

The number of shards handled between each emittance of progress.

Default: 10

:::note

Enable `--tls` before using any of the following modifiers.

:::

#### --tls_cert_path

Where the tls client cert is located.

#### --tls_key_path

Where the tls key is located.

#### --tls_ca_pat

Where the tls ca is located.

#### --tls_server_name

The name of the Db tls server.

#### --tls_disable_host_verification

Disables verification of the DB tls hostname and server cert.

### scan

The `tctl admin db scan` command scans concrete Workflow Executions in a given database, and detects corrupted ones.

#### --db_engine

Type of DB engine to use

Default: `cassandra`
Value: `cassandra` | `mysql` | `postgres`

#### --db_address

Persistence address for the DB.

Default: 127.0.0.1

#### --db_port

Persistence port for the DB.

Default: 9042

#### --username

DB username.

#### --password

DB password.

#### --keyspace

DB keyspace

Default: "temporal"

#### --lower_shard_bound value

The minimum amount (inclusive) of corrupt shards to handle.

Default: 0

#### --upper_shard_bound

The maximum amount (exclusive) of corrupt shards to handle.

Default: 16384

#### --starting_rps

starting rps of database queries.

Default: 100

#### --rps value

Target rps of database queries.

Default: 7000

#### --pagesize

The size of the page used to query database executions.

Default: 500

#### --concurrency

Number of threads to handle a scan.

Default: 1000

#### --report_rate

The number of shards handled between each emittance of progress.

Default: 10

#### --tls

Enable TLS over the DB connection.

:::note

Enable `--tls` before using any of the following modifiers.

:::

#### --tls_cert_path

Where the tls client cert is located.

#### --tls_key_path

Where the tls key is located.

#### --tls_ca_path

Where the tls ca is located.

#### --tls_server_name

The name of the Db tls server.

#### --tls_disable_host_verification

Disables verification of the DB tls hostname and server cert.

## decode

The `tctl admin decode` command allows the user to decode payloads sent and received from executed Activities.

`tctl admin decode command [command modifiers] [arguments...]`

- <a class="tdlp" href="#proto">`proto`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin decode proto</p><p class="tdlppd">Decoding proto payloads.</p><p class="tdlplm"><a class="tdlplma" href="#proto">Learn more</a></p></div></a>
- <a class="tdlp" href="#base64">`base64`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin decode base64</p><p class="tdlppd">Decoding Payloads to Base64.</p><p class="tdlplm"><a class="tdlplma" href="#base64">Learn more</a></p></div></a>

### base64

The `tctl admin decode base64` command decodes base64 Payloads.

#### --base64_data

Decoded data in base64 format.

#### --base64_file

Creates a file with data in base64 format.

### proto

The `tctl admin decode proto` command decodes the Payload to proto format.

#### --type

The full name of the proto type to decode the Payload to.

#### --hex_data

Decodes the data to hex format.

#### --hex_file

Creates a file with the decoded hex data.

#### --binary_file

Creates a file with the decoded binary data.

## dlq

The `tctl admin dlq` commands run admin operations on a given dead-letter queue (DLQ).

`tctl admin dlq command [command modifiers] [arguments...]`

- <a class="tdlp" href="#read">tctl admin dlq read<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin dlq read</p><p class="tdlppd">Reading DLQ messages.</p><p class="tdlplm"><a class="tdlplma" href="#read">Learn more</a></p></div></a>
- <a class="tdlp" href="#purge">tctl admin dlq purge<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin dlq purge</p><p class="tdlppd">Deleting DLQ messages.</p><p class="tdlplm"><a class="tdlplma" href="#purge">Learn more</a></p></div></a>
- <a class="tdlp" href="#merge">tctl admin dlq merge<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin dlq merge</p><p class="tdlppd">Merging DLQ messages.</p><p class="tdlplm"><a class="tdlplma" href="#merge">Learn more</a></p></div></a>

### merge

The `tctl admib dlq merge` command allows dead-letter queue (DLQ) messages to be merged.

The messages must have TaskIds with an equal or lesser value than the given TaskId.

#### --dlq_type

The type of DLQ to manage.

Options: namespace, history

#### --cluster

Source cluster for the DLQ.

#### --shard_id

ShardId provided for the command.

#### --last_message_id

Identifies the last read message.

Default: 0

### purge

The `tctl admin dlq purge` command deletes DLQ messages that have a Task Id equal to or less than the provided Task Id.

#### --dlq_type

The type of DLQ to manage.

Options: namespace, history

#### --cluster

Source cluster for the DLQ.

#### --shard_id

ShardId provided for the command.

#### --last_message_id

Identifies the last read message.

Default: 0

### read

The `tctl admin dlq read` command reads out messages from the dead-letter queue (DLQ).

---

#### --dlq_type

The type of DLQ to manage.

Options: namespace, history

#### --cluster

Source cluster for the DLQ.

#### --shard_id

ShardId provided for the command.

#### --max_message_count

The maximum number of messages to fethc.

Default: 0

#### --last_message_id

Identifies the last read message.

Default: 0

#### --output_filename

Provides a file to write output to.

Output is written to stdout on default.

## history_host

The `tctl admin history_host` command runs an admin-level operation on the history host.

## Usage

`tctl admin history_host command [command options] [arguments...]`

## Commands

- <a class="tdlp" href="#describe">tctl admin history_host describe<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin history_host describe</p><p class="tdlppd">Describing the information in a history host</p><p class="tdlplm"><a class="tdlplma" href="#describe">Learn more</a></p></div></a>
- <a class="tdlp" href="#get_shardid">tctl admin history_host get_shardid<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin history_host get_shardid</p><p class="tdlppd">Providing the shardId on command</p><p class="tdlplm"><a class="tdlplma" href="#get_shardid">Learn more</a></p></div></a>

### describe

The `tctl admin history_host describe` command describes the internal information of history host.

The following modifiers change the behavior of the command.

#### --workflow_id

Alias: `-w`

The WorkflowId of the Workflow whose history host is to be described.

#### --history_address

The history address of the history host.

#### --shard_id

The Id of the shard that belongs to the history host.

#### --print_full

Print a full and detailed summary of the history host.

### get_shardid

The `tctl admin history_host get_shardid` command gets the `shardId` for a given `namespaceId` and `workflowId`.

The following modifiers change the behavior of this command.

#### --namespace_id

The `namespaceId` of the history host where we're getting the `shardId`.

#### --workflow_id

Alias: `-w`

The WorkflowId of the history host where we're getting the shardId.

#### --number_of_shards

The total amount of shards for the Temporal Cluster.

Default: 0

## membership

The `tctl admin membership` command allows admin operations to be run on membership items.

### Usage

`tctl admin membership command [command modifiers] [arguments...]`

### Commands

- <a class="tdlp" href="#list_gossip">list_gossip<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin membership list_gossip</p><p class="tdlppd">How to describe ringpop membership items</p><p class="tdlplm"><a class="tdlplma" href="#list_gossip">Learn more</a></p></div></a>
- <a class="tdlp" href="#list_db">list_db<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin membership list_db</p><p class="tdlppd">How to describe Cluster membership items</p><p class="tdlplm"><a class="tdlplma" href="#list_db">Learn more</a></p></div></a>

### list_db

The `tctl admin membership list_db` command lists the Cluster items in a targeted membership.

The following modifiers change the behavior of the command.

#### --heartbeated_within

Filters the list by last Heartbeat time.

<!-- todo: add supported format list-->

#### --role

Filters the results by membership role.

Default: all
Values: all, frontend, history, matching, worker

### list_gossip

The `tctl admin membership list_gossip` command lists the ringpop membership items present on the targeted membership.

The following modifier changes the behavior of the command:

#### `--role value`

Filters the results by membership role

Default: all
Values: all, frontend, history, matching, worker

## shard

The `tctl admin shard` commands enable admin-level operations on a specified shard.

#### tctl admin shard commands

- <a class="tdlp" href="#describe">`describe`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin shard describe</p><p class="tdlppd">Describes Id of shard.</p><p class="tdlplm"><a class="tdlplma" href="#describe">Learn more</a></p></div></a>
- <a class="tdlp" href="#describe_task">`describe_task`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin shard describe_task</p><p class="tdlppd">displaying information on a Task within a shard</p><p class="tdlplm"><a class="tdlplma" href="#describe_task">Learn more</a></p></div></a>
- <a class="tdlp" href="#list_tasks">`list_tasks`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin shard list_tasks</p><p class="tdlppd">listing tasks for a given shard Id and Task type</p><p class="tdlplm"><a class="tdlplma" href="#list_tasks">Learn more</a></p></div></a>
- <a class="tdlp" href="#close_shard">`close_shard`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin shard close_shard</p><p class="tdlppd">closing a shard with a given shard Id</p><p class="tdlplm"><a class="tdlplma" href="#close_shard">Learn more</a></p></div></a>
- <a class="tdlp" href="#remove_task">`remove_task`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin shard remove_task</p><p class="tdlppd">removing a Task with given information</p><p class="tdlplm"><a class="tdlplma" href="#remove_task">Learn more</a></p></div></a>

### close_shard

The `tctl admin shard close_shard` command closes a shard with an Id that corresponds to the value given in the command.

`tctl admin shard close_shard [command options] [arguments...]`

The modifier below will change the behavior and output of the command.

#### `--share_id value`

ShareId managed by the Temporal Cluster.

### describe_task

The `tctl admin shard describe_task` command describes a specified Task's Task Id, Task type, shard Id, and task visibility timestamp.

The modifiers below control the output and behavior of the command. Enter all modifiers after the command as such:

`tctl admin shard describe_task <modifiers>`

#### --db_engine

The type of database (DB) engine for the shard to use.

Default: "cassandra"

Values: "cassandra", "mysql", "postgres"

<!-- todo: examples -->

#### --db_address

Persistence address for the database.

Default: 127.0.0.1

#### --db_port

Persistence port for the database.

Default: 9042

#### --username

Username entered into the database.

#### --password

Password entered into the database.

#### --keyspace

Keyspace for the database.

default: "temporal"

#### --tls

Enables TLS over the database connection.

#### --tls_cert_path

DB tls client cert path.

Note: tls must be enabled

#### --tls_server_name

DB tls server name

Note: tls must be enabled

#### --tls_disable_host_verification

DB tls verify hostname and server cert

Note: tls must be enabled

#### --shard_id

Identifies the specified shard.

Default: 0

#### --task_id

Describes the task.

Default: 0

#### --task_type

The kind of Task that is targeted within a shard.

Default: transfer

Values: transfer, timer, replication

#### --task_timestamp

Task visibility timestamp in nanoseconds

Default: 0

#### --target_cluster

Temporal cluster for the shard to use.

Default: "active"

### describe

The `tctl admin shard describe` command shows the Id for the specified shard.

The modifier below controls the behavior of the command.

#### `--share_id value`

The Id of the shard to describe

Default: 0

### list_tasks

The `tctl admin shard list_tasks` command will list the Tasks available for a given shard Id and Task type.

The modifiers below affect the output and behavior of the command.

#### `--more`

Lists more pages of list tasks.
The default setting is to list one page of 10 list tasks.

#### `--pagesize value`

The size of the result page.
Default: 10

#### `--target_cluster value`

Temporal cluster to use.
Default: "active"

#### `--shard_id value`

The ID of the shard

Default: 0

#### `--task_type value`

The type of Task.

Default: transfer
Values: transfer, timer, replication, visibility

#### `--min_visibility_ts value`

The minimum value that can be set as a Task Visibility timestamp.

Supported formats include:

- '2006-01-02T15:04:05+07:00'
- Raw UnixNano
- Time range (N-duration), where 0 < N < 1000000 and duration (full-notation/short-notation) can be:
  - second/s
  - minute/m
  - week/w
  - month/m
  - year/y

#### `--max_visibility_ts value`

The maximum value that can be set as a Task Visibility timestamp.

Supported formats:

- '2006-01-02T15:04:05+07:00'
- Raw UnixNano
- Time range (N-duration), where 0 < N < 1000000 and duration (full-notation/short-notation) can be:
  - second/s
  - minute/m
  - week/w
  - month/m
  - year/y

### remove_task

The `tctl admin shard remove_task` command removes a Task from the shard.

`tctl admin shard remove_task [command options] [arguments...]`

The Task removed must have values that matches what is given in the command line.

The modifiers below change the behavior of the command.

#### `--shard_id value`

The shardId for the Task to be removed.

Default: 0

#### `--task_id value`

The taskId for the Task to be removed.

Default: 0

#### `--task_type value`

The type of Task to remove.

Default: transfer

Values: transfer, timer, replication

#### `--task_timestamp value`

The task visibility timestamp, given in nanoseconds.

Default: 0

## workflow

The `tctl admin workflow` commands enable administrator-level operations on Workflow Executions.

`tctl admin workflow command [modifiers] [arguments...]`

- <a class="tdlp" href="#show">`show`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin workflow show</p><p class="tdlppd">Showing Workflow history.</p><p class="tdlplm"><a class="tdlplma" href="#show">Learn more</a></p></div></a>

- <a class="tdlp" href="#describe">`describe`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin workflow describe</p><p class="tdlppd">Description of Workflow Execution.</p><p class="tdlplm"><a class="tdlplma" href="#describe">Learn more</a></p></div></a>

- <a class="tdlp" href="#refresh_tasks">`refresh_tasks`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin workflow refresh_tasks</p><p class="tdlppd">Refreshing Workflow Tasks.</p><p class="tdlplm"><a class="tdlplma" href="#refresh_tasks">Learn more</a></p></div></a>

- <a class="tdlp" href="#delete">`delete`<span class="tdlpiw"><img src="/img/link-preview-icon.svg" alt="Link preview icon" /></span><div class="tdlpc"><p class="tdlppt">tctl admin workflow delete</p><p class="tdlppd">Deleting the Workflow Execution.</p><p class="tdlplm"><a class="tdlplma" href="#delete">Learn more</a></p></div></a>

- `--help`

  Show helpful information for `tctl admin workflow` commands.

### delete

The `tctl admin workflow delete` command deletes the current [Workflow Execution](/workflows/#workflow-execution) and the mutableState record.

#### `--db_engine value`

The type of database (DB) engine to use.

Default: "cassandra"
Values: "cassandra", "mysql", "postgres"

#### `--db_address value`

Persistence address for the database.

Default: 127.0.0.1

#### `--db_port value`

Persistence port for the database.

Default: 9042

#### `--username value`

Username entered into the database.

#### `--password value`

Password entered into the database.

#### `--keyspace value`

Keyspace for the database.

default: "temporal"

#### `--url value`

URL of the Elasticsearch cluster.

Default: "http://127.0.0.1:9200"

#### `--es-username value`

Username for the Elasticsearch cluster.

#### `--es-password value`

Password for the Elasticsearch cluster.

#### `--version value`

The version of the Elasticsearch cluster for the Workflow.

Default: v7

Values: v6, v7

#### `--index value`

Elasticsearch index name.

#### `--workflow_id value`

Alias: `-w`

The Id of the current Workflow.

#### `--run_id value`

Alias: `-r`

The Id of the current run.

#### `--skip_errors`

Skip any errors that occur in the Workflow Execution.

#### `--tls`

Enables TLS over the database connection.

:::note

TLS must be enabled to use the following modifiers.

:::

#### `--tls_cert_path value`

DB tls client cert path.

Note: tls must be enabled

#### `--tls_key_path value`

DB tls client key path

Note: tls must be enabled

#### `--tls_ca_path value`

DB tls client ca path

Note: tls must be enabled

#### `--tls_server_name value`

DB tls server name

Note: tls must be enabled

#### `--tls_disable_host_verification`

DB tls verify hostname and server cert

Note: tls must be enabled

## describe

The `tctl admin workflow describe` command describes internal information of the current [Workflow Execution](/workflows/#workflow-execution).

#### `--workflow_id value`

Alias: `-w`

The Id of the current Workflow.

#### `--run_id value`

Alias: `-r`

The Id of the current run.

## refresh_tasks

The `tctl admin workflow refresh_tasks` command updates all [Tasks](/tasks) in a [Workflow](/workflows), provided that the command can fetch new information for Tasks.

#### `--workflow_id value`

Alias: `-w`

The Id of the current Workflow.

#### `--run_id value`

Alias: `-r`

The Id of the current run.

## show

The `tctl admin workflow show` command displays Workflow history from the database.

#### `--workflow_id value`

Alias: `-w`

The current Workflow.

#### `--run_id value`

Alias: `-r`

The current RunId.

#### `--min_event_id value`

The minimum Event Id to include in the history.

Default: 0

#### `--max_event_id value`

The maximum Event Id to include in the history.

Default: 0

#### `--min_event_version value`

The start Event version to be included in the history.

Default: 0

#### `--max_event_version value`

The end Event version to be included in the history.

Default: 0

#### `--output_filename value`

Alias: `--of value`

The file where the output is sent to.
