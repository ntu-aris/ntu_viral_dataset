#!/bin/bash

themes=(base16 base16.dark base16.light base16.monokai base16.monokai.dark base16.monokai.light base16.solarized base16.solarized.dark base16.solarized.light bw colorful github gruvbox gruvbox.dark gruvbox.light igorpro magritte molokai monokai monokai.sublime pastie thankful_eyes tulip)
dest=assets/css/rougify

rm -rf ${dest} && mkdir -p ${dest}

for theme in ${themes[@]}
do
    rougify style ${theme} > ${theme}.scss
    scss --sourcemap=none --style compressed ${theme}.scss ${dest}/${theme}.css
    rm --force ${theme}.scss
done

# pip3 download sphinx-rtd-theme --no-deps
