---
sort: 3
---

# Site language
```yml
lang: en # default
```
Currently available translations, please check the language directory [`/_includes/i18n/`](https://github.com/rundocs/jekyll-rtd-theme/tree/master/_includes/i18n)

{% include reset/i18n.liquid %}
## language codes ({{ languages | size }})
```
{{ languages | slice: 0, 20   | join: "  " }}
{{ languages | slice: 20, 20  | join: "  " }}
{{ languages | slice: 40, 20  | join: "  " }}
{{ languages | slice: 60, 20  | join: "  " }}
{{ languages | slice: 80, 20  | join: "  " }}
{{ languages | slice: 100, 20 | join: "  " }}
```

For more details see: [https://cloud.google.com/translate/docs/languages](https://cloud.google.com/translate/docs/languages)


```danger
If the root subdirectory matches the above language code, will be treated as translated documents
```

```tip
If you have the translated directory(eg: /zh-CN/), make sure the language file already exists!

(eg: This site current page language is: {{ lang }}, the language file /_includes/i18n/{{ lang }}.liquid already exist)
```
