FROM node:12-slim
MAINTAINER Iskra Desenvolupament

RUN mkdir /app

# Bundle app source
ADD . /app

# Set Workdir
WORKDIR /app

ENV NGINX_VERSION 1.15

RUN printf "deb http://archive.debian.org/debian/ jessie main\ndeb-src http://archive.debian.org/debian/ jessie main\ndeb http://security.debian.org jessie/updates main\ndeb-src http://security.debian.org jessie/updates main" > /etc/apt/sources.list

RUN apt-get update
RUN apt-get install -y --fix-missing ca-certificates nginx
RUN rm -rf /var/lib/apt/lists/*

RUN ln -sf /dev/stdout /var/log/nginx/access.log
RUN ln -sf /dev/stderr /var/log/nginx/error.log

COPY default.conf /etc/nginx/conf.d/default.conf

ENV DBUS_SESSION_BUS_ADDRESS=/dev/null

RUN npm install -g @angular/cli@8.3.7
RUN npm install
RUN ng build --prod --output-path build/ --base-href /
RUN rm -rf ./node_modules

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
