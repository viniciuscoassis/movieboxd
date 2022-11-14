
import { QueryResult } from "pg"
import { connection } from "../database/database.js"
import { Movie, MovieEntity } from "../protocols/Movie.js"

function getAll() : Promise<QueryResult<MovieEntity>>{
    return  connection.query("SELECT * FROM movies")

}

function insert(body: Movie) : Promise<QueryResult<Movie>>{
    return connection.query('INSERT INTO movies (title, image, director) VALUES ($1, $2, $3)', [body.title,body.image,body.director])
}

function getById(id: number) : Promise<QueryResult<MovieEntity>> {
    return connection.query('SELECT * FROM movies WHERE id = $1',[id])
}

function addView(id: number, newView: number) : Promise<QueryResult> {
    return connection.query('UPDATE movies SET views = $1 WHERE movies.id = $2', [newView,id]);
}

function deleteById(id: number) : Promise<QueryResult>{
    return connection.query('DELETE FROM movies WHERE id = $1', [id])
}

export {getAll, insert, addView, getById, deleteById}