# mail-api
메일 전송 API

## useage
git clone
```
$ git clone https://github.com/J911/mail-api.git
$ cd mail-api
```

npm install
```
$ npm i
```

run 🔥
```
$ npm start
```

## TEST

### CURL

```
curl -X POST \
  http://localhost:19102/api/v1/mail/send -d 'user={{ user email }}&pass={{ user pass }}&to={{ receiver email }}&subject={{ title }}&text={{ contents }}&service={{ service }}'
```
** service example 'gmail'

