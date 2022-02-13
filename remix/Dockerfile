FROM node:16-alpine
WORKDIR /remix
COPY ./package.json /remix
RUN yarn install
COPY . /remix
#RUN yarn build # will build remix app
#ENV NODE_ENV=production
