#!/usr/bin/env bash

s=$BASH_SOURCE ; s=$(dirname "$s") ; s=$(cd "$s" && pwd) ; SCRIPT_HOME="$s"  # get SCRIPT_HOME=executed script's path, containing folder, cd & pwd to get container path
a="$SCRIPT_HOME/.." ;                a=$(cd "$a" && pwd) ; APP_HOME="$a"

IMAGE_NAME="bxdoan/start_react"
CONTAINER_NAME="bxd_start_react"

cd "$APP_HOME"
    # stop if any running container exists
    docker stop ${CONTAINER_NAME} 2>&1 1>/dev/null
    docker rm   ${CONTAINER_NAME} 2>&1 1>/dev/null

    # load custom mapped exposed-port if nay - default 6000 if not specified
    if [[ -z ${PORT} ]]; then PORT=3000; fi
    # run it
    docker run  --name ${CONTAINER_NAME}  -d                             -p ${PORT}:3000  ${IMAGE_NAME}
                       #container name  #run as daemon aka background  #port mapping  #image name
cd --


# aftermath check
echo
docker ps | grep -E "${CONTAINER_NAME}|IMAGE"
echo "
Container log can be viewed by (press ^C to exit watch)
$ docker logs CONTAINER_NAME

The api is ready to serve when we can see 'Listening at: http://0.0.0.0:$PORT'

# You can run with custom PORT by using command:
PORT=your_port ./run.sh
"
