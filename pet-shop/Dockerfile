FROM node:carbon-alpine
RUN mkdir www/
WORKDIR www/
ADD . .
RUN npm -g install truffle --unsafe-perm
RUN npm install
CMD [ "sh" ]