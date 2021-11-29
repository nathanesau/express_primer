# helloExpress

run app:

```
node helloExpress.js
```

build and run docker image:

```
# first install on mac with brew install --cask docker
docker build -t express-app .
docker run -p 3000:3000 -d --name express-app express-app
# docker rm -f express-app 
```
