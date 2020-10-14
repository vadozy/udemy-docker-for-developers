FROM node:lts-alpine3.9

WORKDIR /var/www

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

# Build:
# docker build -t my_node_image .
# Run:
# docker run -p 3000:3000 my_node_image