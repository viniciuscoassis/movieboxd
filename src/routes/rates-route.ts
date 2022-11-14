import express from "express"
import { avgRate, postRateFunction } from "../controllers/rates-controller.js";

const ratesRoute = express.Router();

ratesRoute.post("/rate", postRateFunction);
ratesRoute.get("/rate/:id", avgRate)

export default ratesRoute;