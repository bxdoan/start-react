#!/usr/bin/env bash
s=$BASH_SOURCE ; s=$(dirname "$s") ; s=$(cd "$s" && pwd) ; SCRIPT_HOME="$s"  # get SCRIPT_HOME=executed script's path, containing folder, cd & pwd to get container path
a="$SCRIPT_HOME/.." ;                a=$(cd "$a" && pwd) ; APP_HOME="$a"

CONTAINER_NAME='bxd_start_react'

cd "$APP_HOME"
    # stop if any running container exists
    docker stop ${CONTAINER_NAME} 2>&1 1>/dev/null
    docker rm   ${CONTAINER_NAME} 2>&1 1>/dev/null
cd --