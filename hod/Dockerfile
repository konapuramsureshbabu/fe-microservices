FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
# Ensure devDependencies are installed
RUN npm install --include=dev
COPY . .
# Verify autoprefixer is installed
RUN npm list autoprefixer || (echo "autoprefixer not found" && exit 1)
RUN npm run build
EXPOSE 3002
CMD ["npm", "run", "preview", "--", "--port", "3002", "--host"]