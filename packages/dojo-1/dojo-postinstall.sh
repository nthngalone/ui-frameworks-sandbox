#!/bin/bash

# The Dojo build utilties require the dojo util package to be name "util".  It's hardcoded into the
# paths.  But when you install dojo-util from npm, the package is named dojo-util.  Short of finding
# any solution or reasoning online, I'm creating a temporary set of symlinks with the correct folder
# names under the dojo-1 folder.  This also simplifies the build configs having dojo "local" to the
# project.
if [ ! -d "dojo-toolkit" ]; then
    mkdir dojo-toolkit
    ln -s ../../../node_modules/dojo ./dojo-toolkit/dojo
    ln -s ../../../node_modules/dijit ./dojo-toolkit/dijit
    ln -s ../../../node_modules/dojo-util ./dojo-toolkit/util
fi
