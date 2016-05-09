#-------------------------------------------------------------------------------
#	Run with docker
# 00 > Install docker
# 01 > Configure volume
# 03 > Configure port
#-------------------------------------------------------------------------------

docker-run = docker run -i -t
docker-run-background = docker run -d

node-name = suippets-node
node-volume = -v /home/dev/Desktop/suippets:/app
node-image = c4co/node
node-command = /bin/bash
node-port = -p 3000:3000

node-run:
	$(docker-run) $(node-port) --name $(node-name) $(node-volume) $(node-image) $(node-command)
node-exec:
	docker exec -i -t $(node-name) /bin/bash

install:
	npm install && npm install -g gulp

all:
	chown dev -R *
