#!/bin/sh

git filter-branch -f --env-filter '
if [ "$GIT_AUTHOR_NAME" = "mcdviral" ]; then
    export GIT_AUTHOR_EMAIL="thienminh.npn@gmail.com"
    export GIT_AUTHOR_NAME="brytsknguyen"
fi
' -- --all