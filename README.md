# jekyll-rtd-theme

![CI](https://github.com/rundocs/jekyll-rtd-theme/workflows/CI/badge.svg?branch=v2)
![jsDelivr](https://data.jsdelivr.com/v1/package/gh/rundocs/jekyll-rtd-theme/badge)

Opinionated github flavored standard document theme for open source projects, with few options, but everything!

## What it does?

This theme is inspired by [sphinx-rtd-theme](https://github.com/readthedocs/sphinx_rtd_theme) and refactored with:

- [github-pages](https://github.com/github/pages-gem)
- [@primer/css](https://github.com/primer/css)

Give you a native GitHub experience and solved the issue of open source project documentation site

- No need to learn other programming languages for building documentation
- No need to care about the site SEO
- Markdown syntax extended
- Native support for mermaid chart plugin

## Quick start

```yml
remote_theme: rundocs/jekyll-rtd-theme
```

You can [generate](https://github.com/rundocs/starter-slim/generate) with the same files and folders from [rundocs/starter-slim](https://github.com/rundocs/starter-slim/)

## Options

```yml
title: Your awesome title
lang: # default: en
description: Write an awesome description for your new site here

readme_index:
  with_frontmatter: true

## optional settings ##
meta:
  key1: value1
  key2: value2

google:
  gtag:
  adsense:

mermaid:
  custom: # mermaid link
  initialize: # mermaid options, default: {}

# also available via file: _include/assets/custom.scss
scss:

# also available via file: _include/assets/custom.js
script:

# also available via file: _data/translate.yml
translate:
  # shortcodes
  danger:
  note:
  tip:
  warning:
  # 404
  not_found:
  # search
  searching:
  search:
  search_docs:
  search_results:
  search_results_found: # the "#" in this translate will replaced with results size!
  search_results_not_found:

## optional plugins ##
plugins:
  - jemoji
  - jekyll-avatar
  - jekyll-mentions
```

## Writing

Document writing specifications, please refer to [rundocs.io](https://rundocs.io) for details

## The license

The theme is available as open source under the terms of the MIT License
