FROM node:14
RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app
RUN npm install -g npm@latest
WORKDIR /usr/app/src
EXPOSE 3000
CMD ["npm","start"]
