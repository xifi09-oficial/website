---
title: '$formatDate'
description: '$formatDate will format a given date.'
id: formatDate
---

`$formatDate` will format a given date.

## Modo de uso

```php
$formatDate[date;format?]
```

## Parámetros

| Campo   | Tipo   | Descripción                                                      | Requerido |
| ------- | ------ | ---------------------------------------------------------------- |:---------:|
| date    | número | The date you want to format.                                     |    sí     |
| format? | cadena | The format that will be used to display the date (listed below). |    no     |

<details open>
  <summary> <h2> Possible formatting </h2></summary>

| Format |                                                            | Returns |
| ------ | ---------------------------------------------------------- | -------:|
| dddd   | Returns the weekday, Monday, Tuesday, Wednesday ...        |  String |
| dd     | Returns the abbreviation of the weekday, Mon, Tue, Wed ... |  String |
| D      | Returns the day of the month                               |  Number |
| DD     | Returns the day of the month                               |  String |
| DDD    | Returns the day of the year, 256, 257 ...                  |  Number |
| M / MM | Returns the month of the year, 10, 11 ...                  |  Number |
| MMM    | Returns the abbreviation of the month, Jan, Feb ...        |  String |
| MMMM   | Returns the month fully January, February ...              |  String |
| YYYY   | Returns year fully, 2020, 2021 ...                         |  Number |
| YY     | Returns the last two digits of the year, 20, 21 ...        |  Number |

</details>

## Ejemplo(s)

This will return your current date in the `dddd, DD MMMM YYYY` format:

```javascript
bot.command({
    name: 'formatDate',
    code: `
  $formatDate[$dateStamp;dddd, DD MMMM YYYY]
  `
});
```