import Joi from "joi";

const movieSchema = Joi.object({
    title: Joi.string().required(),
    director: Joi.string().required(),
    image: Joi.string().required()
})

const rateSchema = Joi.object({
    movieId: Joi.number().required(),
    avaliation: Joi.number().required().greater(-0.01).less(5.1)
})

export {movieSchema, rateSchema}