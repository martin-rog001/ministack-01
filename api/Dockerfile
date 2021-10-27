FROM node:14.18.1-stretch-slim

USER node
COPY --chown=node:node . /var/www/
WORKDIR /var/www
RUN npm install
CMD ["echo","'Preparing to sleep'"]
CMD ["sleep","20"]
CMD ["node","app.js"]
