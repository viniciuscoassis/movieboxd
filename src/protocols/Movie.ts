//tabela do banco

export type MovieEntity = {
        id: number,
        title: string,
        image: string,
        director: string,
        views: number
}

export type Movie = Omit<MovieEntity, "id" | "views">