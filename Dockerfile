FROM node:16-alpine as development
WORKDIR /app
COPY ./package.json .
RUN yarn install
COPY . .
CMD ["yarn","dev"]
