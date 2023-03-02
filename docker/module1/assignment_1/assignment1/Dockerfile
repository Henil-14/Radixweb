FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 8005
CMD ["npm","run","dev","--","--host","--port","8005"]