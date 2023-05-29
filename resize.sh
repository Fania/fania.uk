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
      re="(.+)(\.{1}.{3,4})"
      if [[ $i =~ $re ]]; then 
        name20="${BASH_REMATCH[1]}@20x${BASH_REMATCH[2]}"
        name40="${BASH_REMATCH[1]}@40x${BASH_REMATCH[2]}"
        name60="${BASH_REMATCH[1]}@60x${BASH_REMATCH[2]}"
        name80="${BASH_REMATCH[1]}@80x${BASH_REMATCH[2]}"
        if [[ "${BASH_REMATCH[2]}" == ".mp4" || 
              "${BASH_REMATCH[2]}" == ".webm" ]]; then 
          # VIDEOS
          ffmpeg -i $i scale=iw/5:-1 $name20
          ffmpeg -i $i scale=iw/2.5:-1 $name40
          ffmpeg -i $i scale=iw/1.67:-1 $name60
          ffmpeg -i $i scale=iw/1.25:-1 $name80
        else
          # IMAGES
          magick $i -resize 20% $name20
          magick $i -resize 40% $name40
          magick $i -resize 60% $name60
          magick $i -resize 80% $name80
        fi
      fi
    elif [[ -d $i ]]; then
      break
    fi

  done
  echo "==================================="
  echo "\n"
}
imageLoop