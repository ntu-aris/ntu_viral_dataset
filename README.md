# jekyll-rtd-theme
[![Gem Version](https://img.shields.io/gem/v/jekyll-rtd-theme)][gem]
[![Gem Downloads](https://img.shields.io/gem/dt/jekyll-rtd-theme)][gem]
[![Users](https://img.shields.io/endpoint?url=https://rundocs-analytics.glitch.me/shields)](https://github.com/rundocs/analytics)
[![Jsdelivr hits](https://data.jsdelivr.com/v1/package/gh/rundocs/static/badge)](https://cdn.jsdelivr.net/gh/rundocs/static/)

Just another Jekyll theme for GitHub Pages based on ReadtheDocs's sphinx_rtd_theme styles

## Installation
There are two ways to install: as a gem-based theme, as a remote theme (GitHub Pages compatible)

#### Gem-based method
1. Add the following to your github repository's `Gemfile`
    ```ruby
    source "https://rubygems.org"

    gem "jekyll-rtd-theme"

    gem "github-pages", group: :jekyll_plugins
    ```
2. Add the following to your github repository's `_config.yml`
    ```yml
    theme: jekyll-rtd-theme
    ```

#### Remote theme method
1. Add the following to your site's `_config.yml`
    ```yml
    remote_theme: rundocs/jekyll-rtd-theme
    ```
2. Remove any other `theme` or `remote_theme` entry


## Roadmap
See the [open issues][issues] for a list of proposed features (and known issues).


## Contributing
1. Clone down the theme's repository (`git clone https://github.com/rundocs/jekyll-rtd-theme.git`)
2. `cd` into the theme's directory
3. Run `bundle` to install the necessary dependencies
4. Run `bundle exec jekyll server` to start the preview server
5. Visit [`http://localhost:4000`](http://localhost:4000) in your browser to preview the theme


[gem]: https://rubygems.org/gems/jekyll-rtd-theme
[issues]: https://github.com/rundocs/jekyll-rtd-theme/issues
