FROM node:18-alpine as BUILD
WORKDIR /build
COPY package*.json ./
RUN npm install
RUN apk --no-cache add curl
COPY . .
RUN npm run build

FROM node:18-alpine as APP
WORKDIR /app
COPY --from=BUILD build/package*.json ./
COPY --from=BUILD build/build dist/
COPY --from=BUILD build/.env ./
RUN npm install --only=prod
EXPOSE 3000
CMD ["npm", "start"]