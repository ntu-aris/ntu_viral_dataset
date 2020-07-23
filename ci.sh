#!/bin/bash

# sphinx_rtd_theme 0.5.0
# rougify 3.19.0

themes=(base16 base16.dark base16.light base16.monokai base16.monokai.dark base16.monokai.light base16.solarized base16.solarized.dark base16.solarized.light bw colorful github gruvbox gruvbox.dark gruvbox.light igorpro magritte molokai monokai monokai.sublime pastie thankful_eyes tulip)
rougify=_sass/rougify

rm -rf ${rougify} && mkdir -p ${rougify}

for theme in ${themes[@]}
do
    rougify style ${theme} > ${rougify}/${theme}.scss
done

echo rougify $(rougify version)

# pip download --no-deps sphinx_rtd_theme
