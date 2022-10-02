#!/bin/sh

sudo docker-compose down
 
cd ../../
 
sudo docker-compose --env-file ../../.env up --build -d
 