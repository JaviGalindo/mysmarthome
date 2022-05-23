# My Smart Home 🏠

## How to run it ⚡
- Download the project (git clone or download as zip from github)
- Install docker
- Create env file in root (check next section)
- Run docker-compose from the root folder (where docker-compose.yml is located)
- Go to ```http://localhost:3000```
- Login Admin/Admin
- Go to Admin user and edit email address to your preference
- Go to devices -> Camera
- Check if it has an active notification subscription
- Open new browser tab o postman or similar and make a request to ``` http://localhost:9000/simulateMotion```
- ```Motion simulated``` message should have been displayed
- At somepoint you should see the push notification and/or an email in your inbox

🚨🚨🚨🚨 For testing purposes DO NOT DELETE OR CHANGE Camera device, Notification or USER 🚨🚨🚨🚨


## env file example
Create new file .env in / with following variables:

```
MYSQLDB_USER
MYSQLDB_ROOT_PASSWORD
MYSQLDB_DATABASE
MYSQLDB_PORT
MYSQLDB_HOST

API_PORT

PUBLIC_VAPID_KEY
PRIVATE_VAPID_KEY
WEB_PUSH_CONTACT


#camera

PUBLIC_VAPID_KEY
PRIVATE_VAPID_KEY
WEB_PUSH_CONTACT
CAMERA_API 
CAMERA_API_PORT 
APP_PORT
APP_API
from 
SENDGRID_API_KEY

#Frontend

REACT_APP_SUBSCRIPTION_URL
REACT_APP_PUBLIC_VAPID_KEY
SKIP_PREFLIGHT_CHECK
REACT_APP_API_URL
REACT_APP_API_PORT

```

Docker will create a new container with the following servers:

- App - NodeJS: Backend of the application
- securityCamera - NodeJS: Backend of the application
- client - React: Frontend of the application
- MySQL: Relational database for the APP
- phpMyAdmin: runs phpmyadmin server to manage MySql databases

To connect to the databases:

- MySQL: phpMyAdmin -> login -> {MYSQLDB_USER} & {MYSQLDB_ROOT_PASSWORD}

The services can be run on the background with command:
```bash
docker-compose up -d
```

## Stop the System
Stopping all the running containers is also simple with a single command:
```bash
docker-compose down
```



### API structure
https://www.coreycleary.me/project-structure-for-an-express-rest-api-when-there-is-no-standard-way


### Pending tasks

