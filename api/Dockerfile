FROM node:14.18.1-stretch-slim
EXPOSE 3002
USER node
COPY --chown=node:node . /var/www/
WORKDIR /var/www
RUN npm install
CMD ["node","app.js"]
