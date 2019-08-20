# In case of experimental modules usage
FROM node:12

WORKDIR /usr/src/supermetrics

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]