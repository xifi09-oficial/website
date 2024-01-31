---
title: aoi.js Introduction
description: The beginning process of how to use aoi.js and all its features.
slug: /
---

![aoijs](https://github.com/aoijs/website/blob/main/assets/images/aoijs-banner.png?raw=true)

## Features

- Built-in support of **[database](https://www.npmjs.com/package/@akarui/aoi.db)** by default and ready for multipurpose.
- Built-in **600+** functions, simple and easy to learn.
- Simple to learn, all in string-based and compact.
- Support of extensions available to be used by the community.

## Installation


<Tabs groupId="pref-install">
  <TabItem value="i-npm" label="npm">

  **node.js 16.9.0 or newer is required.**
  ```bash
  npm install aoi.js
  ```

  </TabItem>
  <TabItem value="i-yarn" label="yarn">

  **node.js 16.9.0 or newer is required.**
  ```bash
  yarn add aoi.js
  ```
  
  </TabItem>
</Tabs>

## Setup

```javascript title="index.js"
const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: "Discord Bot Token",
    prefix: "Discord Bot Prefix",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: "a-32-characters-long-string-here",
    }
});

// Ping Command
bot.command({
    name: "ping",
    code: `Pong! $pingms`
});
```

## Disclaimer

**[Aoi.js](https://www.npmjs.com/package/aoi.js)** is not affiliated or associated with Discord or any other services.

## Links

- [Website](https://aoi.js.org)
- [NPM](https://www.npmjs.com/package/aoi.js)
- [Github](https://github.com/AkaruiDevelopment/aoi.js)
- [Discord Support Server](https://aoi.js.org/invite)