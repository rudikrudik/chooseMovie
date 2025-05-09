FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apk --no-cache add curl
COPY . .
EXPOSE 3000
CMD ["npm", "start"]