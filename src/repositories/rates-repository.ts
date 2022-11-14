import { QueryResult } from "pg";
import { connection } from "../database/database.js";
import { Rate, RatesAverage, RatesEntity } from "../protocols/Rate.js";

function postRate(body: Rate) : Promise<QueryResult<RatesEntity>>{
return connection.query('INSERT INTO rates ("movieId", avaliation) VALUES ($1,$2)',[body.movieId,body.avaliation])
}

function fetchAvg(id: number) : Promise<QueryResult<RatesAverage>>{
return connection.query('SELECT AVG(avaliation) AS "Average Avaliation", movies.title AS "Movie Name" FROM rates JOIN movies ON rates."movieId" = movies.id WHERE movies.id =$1 GROUP BY movies.title;',[id])
}
export {postRate, fetchAvg}