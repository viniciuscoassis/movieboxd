# movieBoxd

App used rate movies that you recently watched

## Dump

dump.sql

## Autor

- [@viniciuscoassis](https://github.com/viniciuscoassis)

## Functionalities

- Post Movies
- Get Movies
- link shortener
- links visits rank
- check your links

## Stack

**Back-end:** Node, Express

- bcrypt: encrypt sensitive data
- joi: all validations
- nanoid: generate random code for shortened urls
- uuid: generate session token

**Database**: Postgres

## Learnings

Learned how to develop a complete API with genuine functionality from scratch, using popular tools from actual market such as node.js and express, also dealing with SQL Database Postgres.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/viniciuscoassis/projeto16-shortly.git
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## API Documentation

## Movies

#### Return all items

```http
  GET /movies
```

returns:

```http
[
  {
    "id": 1,
    "title": "movie 1",
    "image": "image",
    "views": 0,
    "director": "director's name"
  },
  {
    "id": 2,
    "title": "movie 2",
    "image": "image",
    "views": 0,
    "director": "director's name"
  }
]
```

#### Post new movie

```http
  POST /movies
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `body`    | `string` | **Mandatory**. Body from the new movie |

###### Body must look like:

```http

{
"title": "movie",
"director": "directors name",
"image": "image"
}

```

#### Update views

```http
  PUT /movies/${id}
```

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| `id`      | `string` | **Mandatory**. The id from the movie marked as viewed |

#### Delete movie

```http
  DELETE /movies/${id}
```

| Parameter | Type     | Description                                             |
| :-------- | :------- | :------------------------------------------------------ |
| `id`      | `string` | **Mandatory**. The id from the movie you want to delete |

## Rates:

#### Post rate

```http
  POST /rate
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `body`    | `string` | **Mandatory**. Body from the new rate |

###### Body must look like:

```http

{
"movieId": ${id},
"avaliation": 5 -- avaliation from 0 to 5
}


```

#### Get average avaliation

```http
  GET /rate/${id}
```

| Parâmetro | Tipo     | Descrição                                                                       |
| :-------- | :------- | :------------------------------------------------------------------------------ |
| `id`      | `string` | **Mandatory**. the id from the movie which you want to check average avaliation |
