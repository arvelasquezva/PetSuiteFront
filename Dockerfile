FROM node:latest
WORKDIR /learntic
COPY . .
RUN npm install
EXPOSE 8080
CMD ["npm", "run", "serve"]