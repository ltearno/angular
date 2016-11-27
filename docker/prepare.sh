#!/bin/bash

npm uninstall -g npm
tar -xvzf npm-3.5.3.tgz
cd package
./configure
make install