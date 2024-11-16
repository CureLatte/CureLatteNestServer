FROM node:20

WORKDIR /app

EXPOSE 8888

# apt update
RUN ["apt-get", "update", "-y"]

RUN ["apt-get", "upgrade", "-y"]

RUN ["apt-get", "install", "net-tools" , "-y"]


RUN ["ls"]

# COPY build
COPY ./dist ./dist


# COPY package.json
COPY ./package.json ./

COPY ./tsconfig.json ./

COPY ./nest-cli.json ./

# node modules 설치
# RUN ["yarn", "install"]

# node module copy
COPY ./node_modules ./node_modules



# CMD ["ls", "dist"]
CMD ["npm", "run", "start"]
