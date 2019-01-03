FROM node:10-alpine
EXPOSE 4000
ENV ENGINE_API_KEY "ENGINE API KEY"
COPY package.json package-lock.json ../
RUN npm install && npm cache clean --force
COPY src/ ./src/
USER 1000 
CMD ["npm", "start"]
