FROM maven:3-jdk-8 as build
WORKDIR /workspace/app
COPY pom.xml .
COPY webpack.config.js .
COPY package.json .
COPY .babelrc .
COPY src src
