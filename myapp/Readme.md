# My Smart Home server API

## How to run:

### Swagger documentation for the API
    localhost:port/api-docs
### Prerequisites
1. Running MySQL instance

### Local
Create local environment file .env.local, for example:
```
MYSQLDB_USER=root
MYSQLDB_ROOT_PASSWORD=123456
MYSQLDB_DATABASE=mysmarthome
MYSQLDB_LOCAL_PORT=3307
MYSQLDB_HOST=localhost

MONGODB_USER=root
MONGODB_ROOT_PASSWORD=123456
MONGODB_DATABASE=mysmarthome
MONGODB_LOCAL_PORT=27017

SERVER_PORT=3001
```
then run
```
yarn local
```
## Run
```
yarn start
```