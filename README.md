# ministack-01

Basic nodejs + mysql application to demo docker/docker-compose, 

## build with compose
docker-compose build

## run
docker-compose run --force-recreate





## Trouble shooting

- If env variables are not updating use ```docker-compose rm``` and then relaunch docker compose ()

The docker-compose stop command will stop your containers, but it won’t remove them.

The docker-compose down command will stop your containers, but it also removes the stopped containers as well as any networks that were created.
## Mysql notes

### start separate mysql container
docker run -p3306:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=foo mysql:8.0

### test connection to mysql
mysql -h localhost -P 3306 --protocol=tcp -u root -ppassword
