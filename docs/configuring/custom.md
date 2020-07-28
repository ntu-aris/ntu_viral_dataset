---
sort: 10
---

# Custom scss or script

via file:
```yml
_sass/custom.scss

_includes/assets/js/custom.js
```

via `_config.yml`:
```yml
script: |
  alert("it");
  alert("works!")

scss: |
  .wy-nav-content-wrap{background:#fcfcfc}
  .wy-nav-content-wrap .wy-nav-content{max-width:none}
```
