#!/usr/bin/env bash

s=$BASH_SOURCE ; s=$(dirname "$s") ; s=$(cd "$s" && pwd) ; SCRIPT_HOME="$s" # get SCRIPT_HOME=executed script's path, containing folder, cd & pwd to get container path
a="$SCRIPT_HOME/.."                ; a=$(cd "$a" && pwd) ; APP_HOME="$a"

set -e  # halt if error

IMAGE_NAME="bxdoan/start_react"

cd "$APP_HOME"
    # build the docker image for this app i.e. local image $IMAGE_NAME
    docker build -t ${IMAGE_NAME}           .
                 #t aka tag of the image  #build image from :current_folder/Dockerfile
cd --


# aftermath check
echo
docker image ls | grep -iE "$IMAGE_NAME|REPOSITORY"
