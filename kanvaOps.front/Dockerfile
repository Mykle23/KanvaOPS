# Etapa de construcción
FROM node:20-alpine as build
RUN apk add --no-cache tzdata
RUN apk add --no-cache --upgrade bash

# Establecer el directorio de trabajo
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

COPY --from=build /app/dist/curso-angular /usr/share/nginx/html
COPY /public/favicon.ico /usr/share/nginx/html/favicon.ico
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 80
EXPOSE 80

# Start
# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
