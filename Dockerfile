FROM timbru31/node-alpine-git as builder

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY . /app
WORKDIR /app
RUN git submodule update --init
RUN npm ci
RUN npm run build

ENTRYPOINT npx react-inject-env set