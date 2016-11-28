FROM node:5.4.1

RUN cd /root

# RUN npm update -g npm
#RUN curl -L https://npmjs.org/install.sh | sh

RUN apt update
RUN apt install dos2unix
RUN apt install vim

# https://registry.npmjs.org/npm/-/npm-3.5.3.tgz
COPY npm-3.5.3.tgz /

COPY prepare.sh /
COPY buildAngularGwt.sh /