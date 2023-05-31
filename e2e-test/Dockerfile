FROM node:18 AS base


# RUN apk add --no-cache libc6-compat
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev
RUN apt-get update && apt-get -y install libgtk-3-0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libdbus-glib-1-2 libx11-xcb1 libxcursor1

WORKDIR /test

COPY  package.json package-lock.json ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm install; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi



RUN sh -c 'npx playwright install'

COPY . .



