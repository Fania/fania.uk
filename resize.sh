#!/bin/sh

# set -o rematchpcre

# Call script by passing it the path to folder for images
# e.g. 
# ./resize.sh images/gallery/2003
# media queries @
# 700px / 1000px / 1200px
# 43.75em / 62.5em / 75em

# https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap09.html#tag_09_04

# - 3200 x 1800 (QHD+)
# - 2560×1440 (1440p, QHD)
# - 1920×1080 (1080p, FHD)
# - 1600×900 (HD+)
# - 1366×768 (WXGA)
# - 1280×720 (720p, HD)
# - 960×540 (qHD)
# - 720×480 (480p, SD)

# - 854 x 480 px
# - 640 x 360 px
# - 426 x 240 px

echo "\n"
echo "==================================="
echo "Creating responsive image sizes in:"
cd $1
echo $(pwd)
echo "-----------------------------------"

if [[ ! -d 'rspnvs' ]]; then
  mkdir 'rspnvs'
fi


function resizeLoop() {
  for i in $(pwd)/*; do
    echo $i
    # echo "inside imageLoop"
    if [[ -f $i ]]; then
      # echo "item is a file"
      re='([\-a-z_A-Z0-9]+\.[a-z0-9]{3,4})'  # works
      # if [[ $i =~ ([\-a-z_A-Z0-9]+\.[a-z0-9]{3,4}) ]]; then 
      if [[ $i =~ $re ]]; then 
# /Users/fania/Documents/GitHub/fania.uk/images/portfolio/qpoems.webm
# /Users/fania/Documents/GitHub/fania.uk/images/portfolio/responsive-spiral.avif
        echo 'test'
        echo "matches: ${BASH_REMATCH}"
        # echo "0: ${BASH_REMATCH[0]}"
        # echo "1: ${BASH_REMATCH[1]}"
        # echo "2: ${BASH_REMATCH[2]}"
        name640="rspnvs/${BASH_REMATCH[1]}@640w${BASH_REMATCH[2]}"
        name960="rspnvs/${BASH_REMATCH[1]}@960w${BASH_REMATCH[2]}"
        name1280="rspnvs/${BASH_REMATCH[1]}@1280w${BASH_REMATCH[2]}"
        name1920="rspnvs/${BASH_REMATCH[1]}@1920w${BASH_REMATCH[2]}"
        name2560="rspnvs/${BASH_REMATCH[1]}@2560w${BASH_REMATCH[2]}"

        if [[ "${BASH_REMATCH[2]}" == ".mp4" || 
              "${BASH_REMATCH[2]}" == ".webm" ]]; then 
          # VIDEOS
          ffmpeg -i $i -vf scale=640:-2  $name640  -nostats -loglevel 0
          ffmpeg -i $i -vf scale=960:-2  $name960  -nostats -loglevel 0
          ffmpeg -i $i -vf scale=1280:-2 $name1280 -nostats -loglevel 0
          ffmpeg -i $i -vf scale=1920:-2 $name1920 -nostats -loglevel 0
          ffmpeg -i $i -vf scale=2560:-2 $name2560 -nostats -loglevel 0
          # ffmpeg -i $i -vf scale=iw/5:-2    $name512 -nostats -loglevel 0
        else
          # IMAGES
          # magick $i -resize 20% $name512
          magick $i -resize 640x360\>   $name640
          magick $i -resize 960x540\>   $name960
          magick $i -resize 1280x720\>  $name1280
          magick $i -resize 1920x1080\> $name1920
          magick $i -resize 2560x1440\> $name2560
        fi
      else 
        echo 'regex didnt work'
      fi
    elif [[ -d $i ]]; then
      break
    fi

  done
  echo "==================================="
  echo "\n"
}
resizeLoop