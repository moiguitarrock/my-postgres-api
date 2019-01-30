# How to run this API?

- pre-requisites: NodeJs, Docker, git

### running the Dockerfile

```
$ cd db
$ docker build -t eg_postgresql .
$ docker run --rm -P --name pg_test eg_postgresql
```

### Verify postgres is running properly

```
docker ps
```

> it should show a list of the container running. **Get the PORTS column value**

## Bacl to the root folder of this project

```
$ cd ../
```

## Environment variables file

Edit the `.env` file located at the root of this project:

`.env`

```
NODE_ENV='development'
PORT=7008

# database params
DB_HOST='0.0.0.0'
DB_CLIENT='pg'
DB_USER='postgres'
DB_PASSWORD=''
DB_PORT=[PUT HERE THE PORT YOU GOT WHEN YOU LISTED THE DOCKER CONTAINERS]
DB_DATABASE='assignment'
```

**Replace the placeholders**

## Run the API

```
$ npm start
```

---

## Endpoints

- `/topActiveUsers?page={pageNumber)`
- `/users?id={userId}`

---

## How long did it take you to finish it?

This project takes me 5 hours to complete them

## What would you have done if time permitted?

Complete the code coverage
