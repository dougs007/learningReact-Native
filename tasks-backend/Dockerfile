FROM node:10.16

MAINTAINER Douglas Santana <douglasantana007@gmail.com>

WORKDIR /var/www

COPY package*.json ./

RUN npm install
RUN npm i knex -g

COPY . .
EXPOSE 3000

CMD ["npm", "start"]
