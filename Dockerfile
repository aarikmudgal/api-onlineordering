FROM node
RUN mkdir /app && cd /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm i material-ui@1.0.0-beta.40
RUN npm run build:dll
COPY ./metro-ui-components /app/node_modules/metro-ui-components
CMD [ "npm", "start" ]
EXPOSE 3000
