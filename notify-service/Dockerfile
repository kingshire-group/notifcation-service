FROM node:latest

RUN apt-get update

RUN apt-get install -y build-essential

WORKDIR /app

ADD package.json /app/

RUN yarn

COPY . /app/

EXPOSE 5000

CMD ["yarn", "start"]