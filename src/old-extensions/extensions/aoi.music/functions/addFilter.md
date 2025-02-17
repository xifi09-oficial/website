---
title: $addFilter
description: $addFilter will add given filters.
id: addFilter
---

`$addFilter` will add given filters.

## Usage

```php
$addFilter[filter]
```

## Parameters

| Field  | Type                                                                                              | Description | Required |
| ------ | ------------------------------------------------------------------------------------------------- | ----------- | :------: |
| filter | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | JSON format |   true   |

| Filter      | Contains                                   | JSON Format                |
| ----------- | ------------------------------------------ | -------------------------- |
| nightCore   | aresample, asetrate                        | `{"nightCore": "value"}`   |
| bassBoost   | bass                                       | `{"bassBoost": "value"}`   |
| 8D          | extrastereo, aecho, apulsator, stereowiden | `{"8D: "value"}`           |
| pitch       | asetrate, atempo, aresample                | `{"pitch": "value"}`       |
| karaoke     | stereotools                                | `{"karaoke": "value"}`     |
| slowed      | asetrate, aresample                        | `{"slowed": "value"}`      |
| deep        | asetrate, atempo, aresample                | `{"deep": "value"}`        |
| trebleBoost | treble                                     | `{"trebleBoost": "value"}` |
| gate        | agate                                      | `{"gate": "value"}`        |
| vibrato     | vibrato                                    | `{"vibrato": "value"}`     |
| flanger     | flanger                                    | `{"flanger": "value"}`     |
| phaser      | aphaser                                    | `{"phaser": "value"}`      |

aoi.music also supports `ffmpeg` built-in filters in json format.

## Example(s)

This will add `nightCore` and `bassBoost` filters:

```javascript
client.command({
  name: "addFilter",
  code: `
    $addFilter[{"nightCore": "1", "bassBoost": "0.3"}]
  `
});
```
