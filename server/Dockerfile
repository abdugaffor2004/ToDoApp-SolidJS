FROM node:22-alpine

WORKDIR /app
RUN npm install -g json-server
COPY . .
EXPOSE 3000
CMD ["json-server", "--port", "3000", "db.json"]
