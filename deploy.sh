#!/usr/bin/env bash

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Jsparrow/dashboard.git master:gh-pages

cd -

rm -rf docs/.vuepress/dist
