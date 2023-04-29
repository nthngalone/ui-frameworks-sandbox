#!/bin/bash

# Clean the dist directory
rm -rf dist

# Run the Dojo build
node ./dojo-toolkit/dojo/dojo.js load=build --profile ./build.profile.js

# Copy the index.html to the dist directory
cp index.html ./dist
