---
sort: 2
---

# List directory

If you want to list all `pages` in the current directory, add following code to your markdown file!

    {% raw %}
    {% include list.liquid %}
    {% endraw %}

Then Generate a list like this:
{% include list.liquid %}

If you want to list all `pages and sub directory` in the current directory, add following code to your markdown file!

    {% raw %}
    {% include list.liquid all=true %}
    {% endraw %}

Then Generate a list like this [table of contents]({{ site.baseurl }}/docs/)!
