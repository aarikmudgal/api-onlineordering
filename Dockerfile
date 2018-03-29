FROM node
RUN mkdir /app && cd /app
WORKDIR /app
COPY . /app
RUN npm run setup
COPY ./metro-ui-components /app/node_modules/
CMD [ "npm", "start" ]
EXPOSE 3000