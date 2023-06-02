#!/bin/sh

# Call script by passing it the path to folder for images
# e.g. 
# ./resize.sh images/gallery/2003
# media queries @
# 700px / 1000px / 1200px
# 43.75em / 62.5em / 75em


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

function resizeLoop() {
  for i in $(pwd)/*; do
    echo $i
    # echo "inside imageLoop"
    if [[ -f $i ]]; then
      # echo "item is a file"
      re="(.+)(\.{1}.{3,4})"
      if [[ $i =~ $re ]]; then 
      # 512
        name426="${BASH_REMATCH[1]}@426w${BASH_REMATCH[2]}"
        name640="${BASH_REMATCH[1]}@640w${BASH_REMATCH[2]}"
        name720="${BASH_REMATCH[1]}@720w${BASH_REMATCH[2]}"
        name960="${BASH_REMATCH[1]}@960w${BASH_REMATCH[2]}"
        name1280="${BASH_REMATCH[1]}@1280w${BASH_REMATCH[2]}"
        # name80="${BASH_REMATCH[1]}@2048w${BASH_REMATCH[2]}"
        if [[ "${BASH_REMATCH[2]}" == ".mp4" || 
              "${BASH_REMATCH[2]}" == ".webm" ]]; then 
          # VIDEOS
          ffmpeg -i $i -vf scale=426:-2 $name426 -nostats -loglevel 0
          ffmpeg -i $i -vf scale=640:-2  $name640 -nostats -loglevel 0
          ffmpeg -i $i -vf scale=720:-2 $name720 -nostats -loglevel 0
          ffmpeg -i $i -vf scale=960:-2 $name960 -nostats -loglevel 0
          ffmpeg -i $i -vf scale=1280:-2 $name1280 -nostats -loglevel 0
          # ffmpeg -i $i -vf scale=iw/5:-2    $name512 -nostats -loglevel 0
          # ffmpeg -i $i -vf scale=iw/2.5:-2  $name768 -nostats -loglevel 0
          # ffmpeg -i $i -vf scale=iw/1.68:-2 $name1024 -nostats -loglevel 0
        else
          # IMAGES
          # magick $i -resize 20% $name512
          # magick $i -resize 40% $name768
          # magick $i -resize 60% $name1024
          magick $i -resize 426x240\> $name426
          magick $i -resize 640x360\> $name640
          magick $i -resize 720x480\> $name720
          magick $i -resize 960x540\> $name960
          magick $i -resize 1280x720\> $name1280
        fi
      fi
    elif [[ -d $i ]]; then
      break
    fi

  done
  echo "==================================="
  echo "\n"
}
resizeLoop