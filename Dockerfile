FROM node
RUN mkdir /app && cd /app
WORKDIR /app
COPY . /app
RUN npm run setup
CMD [ "npm", "start" ]
EXPOSE 8080
