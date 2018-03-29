FROM node
RUN mkdir /app && cd /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm run setup
COPY . /app
CMD [ "npm", "start" ]
EXPOSE 8080
