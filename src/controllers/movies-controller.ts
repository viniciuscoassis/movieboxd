import { Request, Response } from "express";
import { Movie } from "../protocols/Movie.js";
import { addView, deleteById, getAll, getById, insert } from "../repositories/movie-repository.js";
import { movieSchema } from "../schemas/movie-schema.js";


async function getAllMovies(req: Request,res: Response) {
    const movies = await getAll();

    return res.send(movies.rows)
}

async function postMovie(req: Request, res: Response){

    const body = req.body as Movie;

    const { error }= movieSchema.validate(body,{abortEarly: false});
    if(error){
        return res.status(500).send(error.message)
    }

try{
    await insert(body);
    return res.sendStatus(201)
}catch(error){
    return res.status(500).send(error)
}
}

async function updateView(req: Request, res: Response){
    let {id} = req.params;
    const movie = await getById(Number(id));
    const newView = movie.rows[0].views + 1;
    await addView(Number(id), newView);
    return res.sendStatus(200); 
}

async function deleteMovie(req: Request,res: Response){
    const {id} = req.params;
    await deleteById(Number(id));
    return res.status(200).send("Deleted sucessfully");
}

export {getAllMovies, postMovie, updateView ,deleteMovie}