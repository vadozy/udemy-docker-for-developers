# How to run this app from a standard docker container:

# option 1
$ docker run -p 3000:3000 -v $(pwd):/var/www node:lts-alpine3.9 npm start --prefix /var/www

# option 2 (set docker working directory)
$ docker run -p 3000:3000 -v $(pwd):/var/www -w /var/www node:lts-alpine3.9 npm start


# Where /var/www is pretty arbitrary