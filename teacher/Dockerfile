FROM node:18-alpine

WORKDIR /app
COPY /package.json ./
COPY ./teacher ./
COPY /node_modules ./node_modules
RUN npm list autoprefixer || (echo "autoprefixer not found" && exit 1)
RUN npm run build
EXPOSE 3003
CMD ["npm", "run", "dev", "--", "--port", "3003", "--host"]
