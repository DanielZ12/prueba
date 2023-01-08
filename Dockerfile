From node:17.2.0-alpine3.12

WORKDIR /prueba
COPY . .
RUN npm install

CMD ["node", "/prueba/app.js"]
