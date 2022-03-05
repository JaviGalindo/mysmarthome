# My Smart Home 🏠

## How to run it
Create new file .env in / with following variables:

```
MYSQLDB_USER=
MYSQLDB_ROOT_PASSWORD=
MYSQLDB_DATABASE=b
MYSQLDB_LOCAL_PORT=3307
MYSQLDB_DOCKER_PORT=3306

MONGODB_USER=
MONGODB_ROOT_PASSWORD=
MONGODB_DATABASE=
MONGODB_LOCAL_PORT=27017
MONGODB_DOCKER_PORT=27017

NODE_LOCAL_PORT=80
NODE_DOCKER_PORT=3000
```

Docker will create a new container with the following servers:

- NodeJS: Backend of the application
- MySQL: Relational database for the APP
- MongoDB: Non-Relational database for the APP
- phpMyAdmin: runs phpmyadmin server to manage MySql databases

To connect to the databases:

- MySQL: phpMyAdmin -> login -> {MYSQLDB_USER} & {MYSQLDB_ROOT_PASSWORD}
- MongoDB Compass: connection string: ``` mongodb://localhost:{MONGODB_LOCAL_PORT}/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false ```

The services can be run on the background with command:
```bash
docker-compose up -d
```

## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```