---
title: Client Commands
description: This guide will be covering how to start creating commands, how to use command handlers, how to creat multiple commands in one file and how to update commands without restarting your Discord Bot.
id: commands
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/4.png
---

<!-- omit from toc -->
## Table of Contents
- [Creating Commands](#creating-commands)
  - [Command Options](#command-options)
    - [Base Commands](#base-commands)
    - [Event Commands](#event-commands)
    - [Interaction Commands](#interaction-commands)
    - [Loop Commands](#loop-commands)
  - [Command Handler](#command-handler)

---

Before we get started let's cover the basics.

- aoi.js reads **bottom** to **top**, meaning the code starts from the bottom and starts working towards the top.

An example for that is the following:

```js
client.command({
  name: "example",
  code: `
  $sendMessage[Bye!]
  $sendMessage[Hello!]
  `
});
```

In this case, the code will send `Hello!` first and then `Bye!`. This applies to all commands within aoi.js.

## Creating Commands

Creating commands brings functionality to your bot, this structure will be used for all commands including events. Events will be covered at a later time.

The structure is as following, (if you're not using a command handler):

```js
<client>.command({ ... });
```

`<client>` stands for the AoiClient you defined in your `index.js` file at the very top.

Commands have a variety of properties, which will be covered in the next section.

For now you only need to know about `name` and `code`.

---

The `name` defines the name of the command and also how to execute it. Meaning you would be able to use `[prefix]name` to execute the command.

```js
<client>.command({ 
  name: "ping" 
});
```

This does nothing, as of now. It's just a command called `ping`. To give it functionality we use the `code` property.

The code property defines the **functionality** of the command - its core.

```js
<client>.command({ 
  name: "ping",
  code: `My ping is: $ping MS!`
});
```

This would execute upon using the `[prefix]ping` within your Discord Server, this would return the current bot latency.

### Command Options

There are a variety of commands, event commands, base commands, interaction commands and way more.

#### Base Commands

The base command, also known as prefix command has a few properties.

```js
<client>.command({ 
    name: string,
    aliases? : string,
    nonPrefixed? : boolean,
    executeAt? : string,
    code: string
});
```

An example of using all properties would be the following:

```js
<client>.command({ 
    name: "ping",
    aliases: ["pong"],
    nonPrefixed: false,
    executeAt: "both",
    code: `My ping is $ping MS!`
});
```

| OPTION        | INPUT   | EXPLANATION                                                                                                            |
| ------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `name`        | string  | Command Name.                                                                                                          |
| `aliases`     | string  | Aliases, work the same way as `name`.                                                                                  |
| `nonPrefixed` | boolean | Set your command as non prefixed, meaning it can be executed without the actual prefix.                                |
| `dmOnly`      | boolean | Set the command to be useably only in guilds or Direct Messages.                                                       |
| `executeAt`   | string  | Define where it may can get executed in. <br /> 1. **guild** <br /> 2. **dm** <br /> 3. **groupDM** <br /> 4. **both** |
| `code`        | string  | Your command code.                                                                                                     |

#### Event Commands

Event commands have the following structure:

```js
<client>.<event>Command({
    name? : string,
    channel? : string,
    code: string,
})
```

`<client>` stands - once again - for the AoiClient you defined in your `index.js` file at the very top.

`<event>` stands for the event you want to use for example `onBanAdd` would become `<client>.banAddCommand()`. this applies to all commands.

An example of using all properties would be the following:

```js
<client>.banAddCommand({ 
    name: "Event Command Example",
    channel: "123456789012345", // **must** be a valid channel ID
    code: `
    <@$authorID> just got banned!
    `
});
```


| OPTION    | INPUT  | EXPLANATION                                                                |
| --------- | ------ | -------------------------------------------------------------------------- |
| `name`    | string | Command Name.                                                              |
| `type`    | string | Defines the command type, any event, for example: `interaction` or `loop`. |
| `channel` | string | Where the output may go.                                                   |
| `code`    | string | Your command code.                                                         |

#### Interaction Commands

```js
<client>.interactionCommand({
    name: string,
    type: string,
    prototype: string,
    code: string,
});
```

| OPTION      | INPUT  | EXPLANATION                                                                                                                          |
| ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `name`      | string | Command Name.                                                                                                                        |
| `type`      | string | Defines the command type.                                                                                                            |
| `prototype` | string | Defines what the command will be triggered by. <br /> 1. **button** <br /> 2. **selectMenu** <br /> 4. **slash** <br /> 5. **modal** |
| `code`      | string | Your command code.                                                                                                                   |

#### Loop Commands

```js
<client>.loopCommand({
    name: string,
    type: string,
    channel? : number,
    executeOnStartup? : boolean,
    every: number,
    code: string
});
```

| OPTION             | INPUT   | EXPLANATION                                                   |
| ------------------ | ------- | ------------------------------------------------------------- |
| `name`             | string  | Command Name.                                                 |
| `type`             | string  | Defines the command type, any event, `interaction` or `loop`. |
| `channel`          | string  | Where the output may go.                                      |
| `executeOnStartup` | boolean | If the command will be executed after the bot restarted.      |
| `every`            | number  | Interval of the loop command.                                 |
| `code`             | string  | Your command code.                                            |

---

### Command Handler

You can also keep your `index.js` - or whatever the file is called for you - neat and tidy, by using command handlers.

By using command handlers, you're creating a file for each command instead of putting them all in the same file.

```diff lang="js" title="index.js"
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  // our configuration
});

+ client.loadCommands("./commands/", true); // This will be your commands folder, you can give it any name you want. The true enables the logging, you can disable it by replacing true with false.
```

Make sure to create a commands folder in the root directory, meaning where your index.js file is located.

---

Once that is done, we start creating files inside of that folder.

These files can be named what you want, however you need to add the `.js` syntax after the name, to turn it into a Javascript file.

Let's, once again, create a ping command. It's basically the same, just one line changes.

```diff lang="js" title="commands/index.js"
- <client>.command({
+ module.exports = ({
    name: "ping",
    code: `My ping is $ping MS!` // The ping function returns the current ping.
});
```

Everything besides the first line stays the same, easy right?

Your command should look like this in the end:

```js title="commands/ping.js"
module.exports = ({
    name: "ping",
    code: `My ping is $ping MS!` // The ping function returns the current ping.
});
```

---

So let's look at adding **multiple** commands to the same file, yes, multiple!

Yet again, we pretty much only change the first and last line.

```diff lang="js" title="commands/ping.js"
- module.exports = ({
+ module.exports = [{
    name: "ping",
    code: `My ping is $ping MS!` // The ping function returns the current ping.
- });
+ }, {
+   name: "uptime",
+   code: `I'm online for $uptime!` // The uptime function returns the current uptime in hours, minutes and seconds.
+ }];
```

This is basically an array just with a little extra spice.

Your command should look like this in the end,

```js title="commands/ping.js"
module.exports = [{
  name: "ping",
  code: `My ping is $ping MS!` // The ping function returns the current ping.
}, {
  name: "uptime",
  code: `I'm online for $uptime!` // The uptime function returns the current uptime in hours, minutes and seconds.
}];
```

