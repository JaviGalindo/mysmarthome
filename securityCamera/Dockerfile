FROM node:14

WORKDIR /securityCamera
COPY package.json .
RUN npm install
COPY . .
CMD npm run startServer
