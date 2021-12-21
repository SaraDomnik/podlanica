FROM node:14
COPY . /
ENV ENVIRONMENT='production'
RUN npm install
RUN npm run build

CMD node app.js