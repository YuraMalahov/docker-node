# docker-node example

build image
sudo docker build -t test/test-node-server .

run 
sudo docker run --name web -p 8080:8080 test/test-node-server
