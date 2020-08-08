---
sort: 1
---

# Gemfile

Add the following to your site's `Gemfile`, for local preview!

```ruby
source "https://rubygems.org" # gems.ruby-china.com

gem "jekyll-rtd-theme"

gem "github-pages", group: :jekyll_plugins
```

## Advanced usage
Setting up accurate `jekyll_plugins` can speed up your build time

```ruby
source "https://rubygems.org"

gem "jekyll-rtd-theme"

group :jekyll_plugins do
  gem "jekyll-default-layout"
  gem "jekyll-readme-index"
  gem "jekyll-github-metadata"
  gem "jekyll-titles-from-headings"
end
```

Optional `_config.yml`
```yml
plugins:
  - jekyll-default-layout
  - jekyll-readme-index
  - jekyll-github-metadata
  - jekyll-titles-from-headings
```
