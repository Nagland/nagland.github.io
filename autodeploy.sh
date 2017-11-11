#!/bin/bash

hexo clean
hexo generate

cd public

git init .
git remote add origin git@github.com:Nagland/nagland.github.io.git
git add .
git commit -m ':green_book:'
git push -f origin master 
#cp atom.xml feed/index.xml
