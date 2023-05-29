#!/bin/sh

# Call script by passing it the path to folder for images
# e.g. 
# ./resize.sh images/gallery/2003

echo "\n"
echo "==================================="
echo "Creating responsive image sizes in:"
cd $1
echo $(pwd)
echo "-----------------------------------"

function imageLoop() {
  for i in $(pwd)/*; do
    echo $i
    # echo "inside imageLoop"
    if [[ -f $i ]]; then
      # echo "item is a file"
      re="(.+)(\.{1}.{4})"
      if [[ $i =~ $re ]]; then 
        name20="${BASH_REMATCH[1]}@20x${BASH_REMATCH[2]}"
        name40="${BASH_REMATCH[1]}@40x${BASH_REMATCH[2]}"
        name60="${BASH_REMATCH[1]}@60x${BASH_REMATCH[2]}"
        name80="${BASH_REMATCH[1]}@80x${BASH_REMATCH[2]}"
        magick $i -resize 20% $name20
        magick $i -resize 40% $name40
        magick $i -resize 60% $name60
        magick $i -resize 80% $name80
      fi
    elif [[ -d $i ]]; then
      break
    fi

  done
  echo "==================================="
  echo "\n"
}
imageLoop