FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 8002
CMD ["npm","run","dev","--","--host","--port","8002"]