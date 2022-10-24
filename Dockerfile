FROM node:14.17.6-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . /app
RUN npm run build --prod

#Segunda Etapa
FROM nginx:1.17.1-alpine
#Si estas utilizando otra aplicacion cambia  por el nombre de tu app
COPY --from=build-step /app/dist/back /usr/share/nginx/html



