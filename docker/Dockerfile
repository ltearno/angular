FROM node:5.4.1

RUN cd /root

# RUN npm update -g npm
RUN curl -L https://npmjs.org/install.sh | sh

RUN git clone https://github.com/ltearno/angular.git --depth=1

RUN cd angular && npm install && ./build