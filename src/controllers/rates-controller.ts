import { Request, Response } from "express";
import { Rate } from "../protocols/Rate.js";
import { fetchAvg, postRate } from "../repositories/rates-repository.js";
import { rateSchema } from "../schemas/movie-schema.js";
async function postRateFunction(req: Request, res: Response) {
  const body = req.body as Rate;

  const { error }= rateSchema.validate(body,{abortEarly: false});
  if(error){
      return res.status(500).send(error.message)
  }

  try {
    await postRate(body);
    return res.sendStatus(201)
  } catch (error) {
    return res.send(error);
  }
}

async function avgRate(req: Request, res: Response) {
  const {id} = req.params;
    let avg = await fetchAvg(Number(id));
    return res.send(avg.rows[0])
}
export { postRateFunction, avgRate };
