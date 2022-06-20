#!/bin/bash
# Replaces URLs and project names

files=('docker-compose.yaml' 'nuxt.config.js' 'package.json' 'package-lock.json' '.env' '.env.example')
search="14-four-frontend-nuxt"

# Take the search string
read -p "Enter the live domain (ie. my-website): " replace

if [[ $search != "" ]]; then
  for file in "${files[@]}"; do
    #macOS requires backup extension
    sed -E -i'.bak' "s/$search/$replace/g" $file
    #delete backup extension
    rm "$file.bak"
    echo "$file updated"
  done
fi
