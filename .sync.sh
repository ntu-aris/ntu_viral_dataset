#!/bin/bash

rm -rf _sass/lib && mkdir -p _sass/lib

mkdir -p _sass/lib/@primer/css
mkdir -p _sass/lib/font-awesome
mkdir -p _sass/lib/rouge
mkdir -p _sass/lib/material-design-lite

# @primer/css
cp -r node_modules/@primer/css/support    _sass/lib/@primer/css
cp -r node_modules/@primer/css/base       _sass/lib/@primer/css
cp -r node_modules/@primer/css/breadcrumb _sass/lib/@primer/css
cp -r node_modules/@primer/css/buttons    _sass/lib/@primer/css
cp -r node_modules/@primer/css/forms      _sass/lib/@primer/css
cp -r node_modules/@primer/css/loaders    _sass/lib/@primer/css
cp -r node_modules/@primer/css/markdown   _sass/lib/@primer/css
cp -r node_modules/@primer/css/utilities  _sass/lib/@primer/css

# font-awesome
cp node_modules/font-awesome/scss/_variables.scss _sass/lib/font-awesome
cp node_modules/font-awesome/scss/_icons.scss     _sass/lib/font-awesome

# rouge
rougify style github | sass-convert --to scss > _sass/lib/rouge/github.scss

# material-design-lite
cp node_modules/material-design-lite/src/_color-definitions.scss  _sass/lib/material-design-lite
cp node_modules/material-design-lite/src/_functions.scss          _sass/lib/material-design-lite
cp node_modules/material-design-lite/src/_mixins.scss             _sass/lib/material-design-lite
cp node_modules/material-design-lite/src/_variables.scss          _sass/lib/material-design-lite

# format
npm run checkout
