FROM node:20-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/
COPY prisma.config.ts ./ 

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
