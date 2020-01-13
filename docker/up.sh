#!/usr/bin/env bash

s=$BASH_SOURCE ; s=$(dirname "$s") ; s=$(cd "$s" && pwd) ; SCRIPT_HOME="$s" # get SCRIPT_HOME=executed script's path, containing folder, cd & pwd to get container path
APP_HOME="$SCRIPT_HOME/.."

CONTAINER_NAME='bxd_start_react'

if [[ -z ${PORT} ]]; then PORT=3000; fi

#run the container
PORT="$PORT" docker-compose -f "$APP_HOME/docker-compose.yml" up -d --force-recreate #ref. https://forums.docker.com/t/named-volume-with-postgresql-doesnt-keep-databases-data/7434/2

docker ps | grep -E "$CONTAINER_NAME|IMAGE"

#aftermath guide
echo -e "
After run, we can
    check $CONTAINER_NAME by using below command:
    curl -I localhost:$PORT
    # or
    http :$PORT

    # You can run with custom PORT by using command:
    PORT=your_port ./up.sh
Build done
"

