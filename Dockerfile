FROM node:14.17

WORKDIR /usr/src/tommy/biometric-login-demo

RUN npm install -g @angular/cli

COPY package.json .

RUN npm install

COPY . .

RUN ng build --prod

EXPOSE 4200

CMD cd dist && ng serve --host 0.0.0.0