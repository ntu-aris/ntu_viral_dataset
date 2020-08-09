---
sort: 5
---

# Relative and Absolute link
```
[page.path]: {{ page.path }}

[page.url]: {{ page.url }}

[page.url | relative_url]: {{ page.url | relative_url }}

[page.url | absolute_url]: {{ page.url | absolute_url }}

[site.url]: {{ site.url }}

[site.baseurl]: {{ site.baseurl }}

[site.baseurl | append: page.url]: {{ site.baseurl | append: page.url }}
```

## robots.txt
```
Sitemap [absolute_url]: {{ "sitemap.xml" | absolute_url }}
```

## prev and next

```
{% include reset/defaults.liquid -%}

[prev.url]: {{ prev.url }}
[prev.url | absolute_url]: {{ prev.url | absolute_url }}
[prev.url | absolute_url | xml_escape]: {{ prev.url | absolute_url | xml_escape }}
```
