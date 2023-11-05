FROM node:21.1.0-alpine3.18
WORKDIR /api-indicator
COPY . /api-indicator
RUN npm install
EXPOSE 3000
CMD ["node", "src/app.js"]