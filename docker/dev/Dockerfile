FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY ./env/.env.dev ./.env
COPY ./src ./src
COPY ./nest-cli.json ./nest-cli.json
COPY ./tsconfig.build.json ./tsconfig.build.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./prisma ./prisma

CMD [ "yarn", "dev" ]