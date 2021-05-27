FROM node:12.14.1
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start


