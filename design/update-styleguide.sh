rm -rf styleguide/images
$(mdfind kMDItemCFBundleIdentifier == 'com.bohemiancoding.sketch3' | head -n 1)/Contents/Resources/sketchtool/bin/sketchtool export artboards puppet-styleguide.sketch --output=styleguide/images --scales=2