---
sort: 11
---

# Custom scss or script

via file:
```yml
_includes/assets/custom.js
_includes/assets/custom.scss
```

via `_config.yml`:
```yml
script: |
  alert("it");
  alert("works!");

scss: |
  .wy-nav-content-wrap{background:#fcfcfc}
  .wy-nav-content-wrap .wy-nav-content{max-width:none}
```
