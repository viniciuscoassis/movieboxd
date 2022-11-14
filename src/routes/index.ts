import express from "express"
import moviesRoute from "./movies-route.js";
import ratesRoute from "./rates-route.js";


const Routes = express.Router();

Routes.use(moviesRoute);
Routes.use(ratesRoute)

export default Routes;