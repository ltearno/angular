#!/bin/bash

cd /
git clone https://github.com/ltearno/angular.git --depth=1

cd angular
git checkout gwt-2.0.0
npm install
./build.sh

npm install compression-webpack-plugin
cp -R dist/all/@angular node_modules/
$(npm bin)/webpack

# for ngBootstrap
#npm install bootstrap@4.0.0-alpha.4
#npm install @ng-bootstrap/ng-bootstrap

# For Angular Material, to load the dependencies before executing webpack
#npm install @angular2-material/button @angular2-material/button-toggle @angular2-material/card @angular2-material/checkbox @angular2-material/core @angular2-material/grid-list @angular2-material/icon @angular2-material/input @angular2-material/list @angular2-material/menu @angular2-material/progress-bar @angular2-material/progress-circle @angular2-material/radio @angular2-material/sidenav @angular2-material/slider @angular2-material/slide-toggle @angular2-material/tabs @angular2-material/toolbar @angular2-material/tooltip