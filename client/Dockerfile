FROM node:14

WORKDIR /client

COPY package.json .

RUN yarn install --network-timeout 100000

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]