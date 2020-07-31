---
sort: 3
---

# Album Images

Define your data in markdown file or site's `_data/demo.yml`
    {% raw %}
    demo:
      - name: name1
        href: #1
        image: https://via.placeholder.com/200
      - name: name2
        href: #2
        image: https://via.placeholder.com/200
    {% endraw %}

Use the album add following code

    {% raw %}
    {% include album.liquid data=page.demo %}
    or
    {% include album.liquid data=site.data.demo %}
    {% endraw %}
