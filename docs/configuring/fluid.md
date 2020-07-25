---
sort: 6
---

# Set up the fluid layout

```yml
fluid: true
```

Will add following css to site:
```css
{{ "@import 'fluid.scss';" | scssify -}}
```
