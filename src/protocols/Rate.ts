export type RatesEntity = {
    id: number,
    movieId: number,
    avaliation: number
}

export type RatesAverage = {
    "Average Avaliation": number,
    "Movie Name": string; 
}

export type Rate = Omit<RatesEntity, "id">

