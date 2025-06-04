# Если использовать dev режим при запуске контейнера

В этом сучае можно обойтись без использований nginx в Dockerfile. Dockerfile буде вот таким:

```Dockerfile
FROM node:22-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN node scripts/initial-setup.cjs
EXPOSE 5173

CMD ["npm", "run", "dev"]
```

Также в compose файле не нужно будет слушать другой порт (в случае с nginx :80)

Если что есть коммит, который описывает рабочую настройку docker для dev режиме.
