---
sort: 7
---

# Set up addons

```yml
# set the addons content, the order is avaiable
addons:
  - github
  - i18n # not recommended, but available
  - gems
  - analytics

# set true will show the addons with blank content
# addons: true

addons_branch: true # means show addons branch
```

```tip
addons means the footer of sidebar, default is false
```

## i18n
Not recommended, but available, because the nested toctree will make the construction of jekyll very slow!

The root subdirectory naming rules are as follows:
If the name contains a horizontal bar(`-`), it is considered to be a language category, and the articles in it are in the corresponding language ui by default!

```note
If you have the language dir(eg: zh-CN), you must have the language file
```
