FROM node:16

WORKDIR /app

COPY . .

RUN yarn install

# RUN yarn next telemetry disable

RUN yarn build

EXPOSE 3000

CMD ["yarn","dev"]