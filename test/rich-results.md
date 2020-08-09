---
sort: 5

image:
  - https://user-images.githubusercontent.com/68011645/89026666-ad3a8680-d35b-11ea-9f4b-d3fe26ae12ed.png
  - https://user-images.githubusercontent.com/68011645/88376699-87980500-cdd0-11ea-8900-7bab8c811bc9.png
  - https://user-images.githubusercontent.com/68011645/89736266-b4b80900-da9a-11ea-8a32-e2ddd010797a.png
---

# Rich Results Test

Google Rich Results [documents is here](https://developers.google.com/search/reference/overview), You can check the [Google Rich Results Test Tool](https://search.google.com/test/rich-results?url={{ page.url | absolute_url | xml_escape  }}) or [Search this document](https://www.google.com/search?q={{ page.url | absolute_url | xml_escape  }}) to see what it looks like

[https://search.google.com/test/rich-results?id=88lqmoKfHKx-5J7ucKYqKg](https://search.google.com/test/rich-results?id=88lqmoKfHKx-5J7ucKYqKg)


{% for image in page.image %}
#### test image {{ forloop.index }}
![test image {{ forloop.index }}]({{ image }})
{% endfor %}
