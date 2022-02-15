oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g generator
$ gen COMMAND
running command...
$ gen (--version)
generator/0.0.0 linux-x64 node-v16.13.0
$ gen --help [COMMAND]
USAGE
  $ gen COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gen hello PERSON`](#gen-hello-person)
* [`gen hello world`](#gen-hello-world)
* [`gen help [COMMAND]`](#gen-help-command)
* [`gen plugins`](#gen-plugins)
* [`gen plugins:inspect PLUGIN...`](#gen-pluginsinspect-plugin)
* [`gen plugins:install PLUGIN...`](#gen-pluginsinstall-plugin)
* [`gen plugins:link PLUGIN`](#gen-pluginslink-plugin)
* [`gen plugins:uninstall PLUGIN...`](#gen-pluginsuninstall-plugin)
* [`gen plugins update`](#gen-plugins-update)

## `gen hello PERSON`

Say hello

```
USAGE
  $ gen hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/iamdiegow/cli-monorepo/blob/v0.0.0/dist/commands/hello/index.ts)_

## `gen hello world`

Say hello world

```
USAGE
  $ gen hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `gen help [COMMAND]`

Display help for gen.

```
USAGE
  $ gen help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for gen.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.11/src/commands/help.ts)_

## `gen plugins`

List installed plugins.

```
USAGE
  $ gen plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ gen plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `gen plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ gen plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ gen plugins:inspect myplugin
```

## `gen plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ gen plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ gen plugins add

EXAMPLES
  $ gen plugins:install myplugin 

  $ gen plugins:install https://github.com/someuser/someplugin

  $ gen plugins:install someuser/someplugin
```

## `gen plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ gen plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ gen plugins:link myplugin
```

## `gen plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ gen plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ gen plugins unlink
  $ gen plugins remove
```

## `gen plugins update`

Update installed plugins.

```
USAGE
  $ gen plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
