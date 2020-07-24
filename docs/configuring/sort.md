---
sort: 3
---

# Sorting Your Sidebar

Default sorted by `path`, If you want to further setting, add following configuration to your `_config.yml`

```yml
readme_index:
  enabled: true
  with_frontmatter: true
```

Then add following [Front Matter](https://jekyllrb.com/docs/front-matter/) to markdown files.

    {% raw %}
    ---
    sort: 1 # number of relative order
    ---
    {% endraw %}

Now the sorted files will have numbers
