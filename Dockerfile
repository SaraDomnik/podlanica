FROM node:14
COPY . /
RUN npm install
RUN npm run build

CMD node app.js