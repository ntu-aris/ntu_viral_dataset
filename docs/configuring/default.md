---
sort: 2
---

# Default Configuration
```yml
lang: en-US # zh-CN is also available

author: # default: site.github.owner_name

addons: false
addons_commit: false # means addons commit

edit: false

copyright: false

logo: false # relative path to your image

disqus: false # your disqus username
```

```tip
By default Html is compressed and use Jsdelivr CDN
```

### debug
```yml
debug: # if debug is true use local static files.
  compress: false # close html compress
```


## From plugins
Following configuration options by [jekyll-github-metadata](https://github.com/jekyll/github-metadata#what-it-does)

- Propagates the `site.github` namespace with repository metadata
- Sets `site.title` as the repository name, if none is set
- Sets `site.description` as the repository tagline if none is set
- Sets `site.url` as the GitHub Pages domain (cname or user domain), if none is set
- Sets `site.baseurl` as the project name for project pages if none is set
