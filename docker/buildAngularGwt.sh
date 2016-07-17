#!/bin/bash

cd /
git clone https://github.com/ltearno/angular.git --depth=1

cd angular
npm install
./build.sh

npm install compression-webpack-plugin
cp -R dist/all/@angular node_modules/
$(npm bin)/webpack