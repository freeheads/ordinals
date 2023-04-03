FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .
COPY .env .env

RUN yarn build

ENV NODE_ENV production

EXPOSE 4000
CMD [ "node", "dist/main.js" ]
USER node