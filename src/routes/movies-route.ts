import express from "express"
import {  getAllMovies, postMovie, updateView } from "../controllers/movies-controller.js";
import { deleteById } from "../repositories/movie-repository.js";

const moviesRoute = express();

moviesRoute.get("/movies", getAllMovies);
moviesRoute.post("/movies", postMovie);
moviesRoute.put("/movies/:id", updateView)
moviesRoute.delete("/movies/:id", deleteById)

export default moviesRoute;