FROM node:18-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /test

RUN sh -c 'npm install @playwright/test'
RUN sh -c 'npx playwright install'

COPY  package.json package-lock.json ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY . .



