FROM node:12.18.3-alpine3.10

WORKDIR /app/server

COPY package.json .

RUN npm install --save

COPY index.js .

CMD [ "node", "/app/server/index.js" ]
