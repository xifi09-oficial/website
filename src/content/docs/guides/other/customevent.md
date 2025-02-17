---
title: Custom Events
description: This guide will be covering everything you need to know about Custom Events and their usage.
id: custom-events
og_image: https://raw.githubusercontent.com/aoijs/website/main/src/images/og/13.png
---

:::caution[Experienced Users]

Basic JavaScript knowledge is needed, you can find the needed resources here:

[Node.js EventEmitter](https://nodejs.org/dist/latest/docs/api/events.html#emitteremiteventname-args)

:::

<!-- omit from toc -->

### Table of Content

- [CustomEvent Class](#customevent-class)
- [Emitting Custom Events](#emitting-custom-events)
  - [Node.js / Discord.js Method](#nodejs--discordjs-method)
  - [Aoi.js Function Method](#aoijs-function-method)
- [Example Usage of Custom Events](#example-usage-of-custom-events)

---

**aoi.js** has a built-in way to create Custom Events, these can be used for various things. This guide will be covering their usage, how they work, and an example.

## CustomEvent Class

```js title="index.js"
const { CustomEvent } = require("aoi.js");
```

```js
const event = new CustomEvent(client); // Creates a new instance of the CustomEvent class, passing the "client" as an argument.

event.command({
  listen: "eventName", // This should represent the name of the event, in this case it is "eventName".
  code: `
    code
    ` // The code of the event that will be triggered once the event is emitted.
});

event.listen("eventName"); // This will make the client "listen" or in other words, wait for the event to be triggered. It does not trigger the event yet.
```

## Emitting Custom Events

To emit a previously created custom event you have to options.

### Node.js / Discord.js Method

You can use the native [`node.js` method](https://nodejs.org/dist/latest/docs/api/events.html#emitteremiteventname-args) by using `emit`:

```js
EventEmitter.emit(eventName, ...args);
```

### Aoi.js Function Method

On the other side you have the [aoi.js method](https://github.com/AkaruiDevelopment/aoi.js/blob/v6/src/functions/misc/eventEmit.js) with functions:

```php
$eventEmit[eventName, ...args]
```

It would basically do the same as the [node.js method](#emitting-custom-events).

---

## Example Usage of Custom Events

```js title="index.js"
const { AoiClient, LoadCommands, CustomEvent } = require("aoi.js");

const client = AoiClient({
  token: "DISCORD BOT TOKEN",
  prefix: "DISCORD BOT PREFIX",
  intents: ["MessageContent", "GuildMembers", "GuildMessages", "Guilds"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("aoi.db"),
    tables: ["main"],
    path: "./database/",
    extraOptions: {
      dbType: "KeyValue",
    },
  },
});

const event = new CustomEvent(client);

event.command({
  listen: "log",
  code: `$log[Hello!] `
});

event.listen("log");
```

Inside of aoi.js command files or aoi.js related code you can use the `$eventEmit` & `$eventData` functions to interact with created events.

```js
$eventEmit[log];
```

Would do the same as

```js
event.emit("log");
```

Both emit the created `log` event, which causes `Hello!` to appear in your console.
