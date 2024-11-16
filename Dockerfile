FROM node:20

WORKDIR /app

EXPOSE 8888

# apt update
RUN ["apt-get", "update"]

RUN ["apt-get", "upgrade"]

RUN ["apt-get", "install", "net-tools"]


RUN ["ls"]

# COPY build
COPY ./dist ./dist


# COPY package.json
COPY ./package.json ./
# node modules 설치
# RUN ["yarn", "install"]

# node module copy
COPY ./node_modules ./node_modules

# CMD ["ls"]
CMD ["node", "/app/dist/server.js"]
