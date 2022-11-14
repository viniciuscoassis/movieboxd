# movieBoxd

App used rate movies that you recently watched

## Dump

dump.sql

## Autor

- [@viniciuscoassis](https://github.com/viniciuscoassis)

## Functionalities

- Post new Movies
- Get all Movies
- Update views (add +1)
- Delete Movies
- Post rates (from 0 to 5)
- Get average avaliation from movies

## Stack

**Back-end:** Node, Typescript, Express

- joi: all validations

**Database**: Postgres

## Learnings

Learned how to facilitate the code writting by using types from typescript

## Rodando localmente

Clone the project

```bash
  git clone https://github.com/viniciuscoassis/movieboxd.git
```

Get in the projects directory

```bash
  cd my-project
```

Install all dependencies

```bash
  npm install
```

Initialize

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
