# Protocol-registry-cli
> This is a command line version of protocol registry npm module which helps to register custom protocols like myapp://**, etc mapped with custom commands in your system.

This is meant to be used in terminal, not in the browser.

<!-- <p align="center">
    <br>
	<img alt="Coding" width="500" src="https://user-images.githubusercontent.com/41825906/116656011-96d46080-a9a9-11eb-9107-03b2e58f94a3.gif" />
    <br>
</p> -->

## Install

```
$ npm i -g protocol-registry-cli
```
**You can download the binary version here :**
- [`Windows`](protocol-registry-cli-win.exe)
- [`linux`](protocol-registry-cli-linux)
- [`MacOS`](protocol-registry-cli-macos)

## Usage

#### For registering :

```bash
$ protoreg-cli -p "testproto" -c 'echo  \"$_URL_\"' -t -o
```

This will open a terminal and  echo the url by which it was initiated when any url like "testproto://anything" or "testproto://anything/work/to/do" is hit in any browser.

#### For checking :

```bash
$ protoreg-cli check -p "http"
> true

$ protoreg-cli check -p "anythingNotRegistered"
> false
```

## API

At present it supports 2 modes :

### register

This is the default mode which helps you to register custom protocol mapped with a command in you system.

**Note : No output is a successful operation**

### check

Checks if the provided protocol already exists or not.
Prints true or false accordingly.

### options

```
usage: protoreg-cli [-h] [-v] -p PROTOCOL [-c COMMAND] [-t] [-o] [-s] [{register,check}]

A command line tool to register custom protocols mapped with custom commands in your system.

positional arguments:
  {register,check}      Allows you to set whether you want to check or you want to register a
                        protocol.

optional arguments:
  -h, --help            show this help message and exit
  -v, --version         show program\'s version number and exit
  -p PROTOCOL, --protocol PROTOCOL
                        Helps you to specify the protocol.
  -c COMMAND, --command COMMAND
                        Helps you to specify the command you want to map with the protocol. $_URL_
                        mentioned anywhere in your command will be replaced by the url by which it is
                        initiated.
  -t, --terminal        This option tells the system to first launch a terminal and then execute the
                        command inside it. Otherwise commands are executed in background.
  -o, --override        Use this with caution as it will override all previous registrations on this
                        protocol with this command.
  -s, --script          This tells the system to save your command in a script and then run that
                        script for the protocol.
```

## Supported platforms

- [`Windows`](https://g.co/kgs/bm4Z4b) - OS - Supported 
- [`linux`](https://g.co/kgs/xXAi4C) - OS - Supported
- [`MacOS`](https://g.co/kgs/k8yG4U) - OS - Supported with some anomalies mentioned below.

## MacOS Anomalies

### Without terminal option

In MacOS if you don't launch the terminal it will run your command without logging in.

Thus you need to use absolute address of each command in your command string.

#### Example

Suppose you want to run :
```
$ node /path/to/index.js
```

Then first you need to find the path of node using the command below in terminal :
```
$ type node
> node is /usr/local/bin/node
```

Then replace the address of node in original command.
So your final command will be :
```
$ /usr/local/bin/node /path/to/index.js
```

## Contributors:

### Credits goes to these people: ✨

<table>
	<tr>
		<td>
            <a href="https://github.com/Shubham-Kumar-2000/protocol-registry-cli/graphs/contributors">
                <img src="https://contrib.rocks/image?repo=Shubham-Kumar-2000/protocol-registry-cli" />
            </a>
		</td>
	</tr>
</table>
