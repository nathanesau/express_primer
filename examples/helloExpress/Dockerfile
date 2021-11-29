FROM node:16

# create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install
# if you are building your code for production
# RUN npm ci --only=production

# bundle app source
COPY . .

EXPOSE 3000

CMD ["node", "helloExpress.js"]
