FROM node:12 AS build
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

FROM nginx
COPY --from=build /app/public /usr/share/nginx/html
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
