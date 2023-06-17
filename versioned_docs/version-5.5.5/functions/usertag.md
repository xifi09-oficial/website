---
title: $userTag
description: Gets specified user ID's username and discriminator. 
---

This function returns the users username[^1] and tag[^2].

### Usage

```php
$userTag[userID?]
```

### Field

| Field | Description | Type | Required |
| :--- | :--- | :--- | :--- |
| userID? | the id of the user we're going to get | number | no |

## Example

* Let's return author's tag:

```javascript
bot.command({
  name: "user-tag",
  code: `
  $userTag 
  `
// Would return Neodevil#0001
});
```

* Now lets find Leref's tag:

```javascript
bot.command({
  name: "user-tag",
  code: `
  $userTag[$findUser[Leref]] 
  `
// Would return Leref#0001
});
```

[^1]: Neodevil
[^2]: #0001