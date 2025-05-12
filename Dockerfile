FROM node:18-alpine as BUILD
WORKDIR /build
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

#FROM node:18-alpine as APP
#WORKDIR /app
#COPY --from=BUILD build/package*.json ./
#COPY --from=BUILD build/build ./
#COPY --from=BUILD build/.env ./
#RUN apk --no-cache add curl
#RUN npm install --only=prod
#EXPOSE 3000
#CMD ["node", "./app.js"]

# Stage 3: Production environment
FROM nginx:alpine AS PRODUCTION
# Copy the production build artifacts from the build stage
COPY --from=BUILD /build/build /usr/share/nginx/html

# Expose the default NGINX port
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]