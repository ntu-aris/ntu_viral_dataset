---
sort: 2
---

# Default configuration
```yml
lang: en-US # zh-CN is also available

author: # default: site.github.owner_name

copyright: false
edit: false
logo: false # relative path to your image, eg: assets/logo.png
disqus: false # your disqus username
addons: false
addons_commit: false # means addons commit

rougify: github # more options see code highlight
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
