FROM node:22-alpine


WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN node scripts/initial-setup.cjs
EXPOSE 5173

CMD [ "npm", "run", "dev" ]
