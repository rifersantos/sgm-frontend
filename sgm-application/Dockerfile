FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf

FROM node:8.17.0
COPY package*.json ./
RUN npm install
COPY /dist/sgm-application /usr/share/nginx/html