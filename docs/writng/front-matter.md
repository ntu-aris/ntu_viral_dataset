---
sort: 1
---

# Front Matter
If you have a Jekyll page that doesn't have a title specified in the YAML Front Matter, but the first non-whitespace line in the page is a Markdown H1/H2/H3, [this plugin](https://rubygems.org/gems/jekyll-titles-from-headings) instructs Jekyll to use that first heading as the page's title.


If you have a readme file, and your site doesn't otherwise have an index file, [this plugin](https://rubygems.org/gems/jekyll-readme-index) instructs Jekyll to use the readme as the site's index. That's it. No more, no less.

```tip
All of the github pages features is supported
```

Show `category1` in the toctree:
```
README.md
category1/file1.md
category1/file2.md
category1/file3.md
category1/README.md
```

Do not show `category1` in the toctree:
```
README.md
category1/file1.md
category1/file2.md
category1/file3.md
```
