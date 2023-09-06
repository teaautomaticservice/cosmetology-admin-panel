FROM node:20.4.0-alpine as builder
COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM nginx
EXPOSE 5000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html