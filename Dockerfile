FROM node:latest
WORKDIR /learntic
COPY . .
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm install -g npm@7.19.1
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]