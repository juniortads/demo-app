FROM node:10-alpine
WORKDIR /app
EXPOSE 4000
COPY package.json package-lock.json ../
RUN npm install && npm cache clean --force
COPY src/ ./src/
USER 1000 
CMD ["npm", "start"]
