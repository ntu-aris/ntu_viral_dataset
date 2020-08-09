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
User-agent: *
Allow: /

Sitemap [absolute_url]: {{ "sitemap.xml" | absolute_url }}
```
