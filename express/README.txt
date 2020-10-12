# How to run this app from a standard docker container:

$ docker run -p 3000:3000 -v $(pwd):/var/www node:lts-alpine3.9 npm start --prefix /var/www

# Where /var/www is pretty arbitrary