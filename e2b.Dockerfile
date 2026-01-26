FROM node:20-bullseye

WORKDIR /home/user

COPY . .

RUN npm ci || npm install

EXPOSE 3000
