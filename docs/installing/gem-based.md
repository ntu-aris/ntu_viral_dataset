---
sort: 1
---

# Gem based method (stable)
1.Add the following to your site's `Gemfile`
```ruby
source "https://rubygems.org" # gems.ruby-china.com

gem "jekyll-rtd-theme"

gem "github-pages", group: :jekyll_plugins
```

2.Add the following to your site's `_config.yml`
```yml
title: Your awesome title
description: Write an awesome description for your new site here

theme: jekyll-rtd-theme
```

## Quick start with gem based method
The new repository will generate with the same files and folders from [rundocs/starter][repo], You can [preview the theme to see what it looks like][preview], or even [generate it today][generate].

[repo]: https://github.com/rundocs/starter/
[preview]: https://rundocs.github.io/starter/
[generate]: https://github.com/rundocs/starter/generate
