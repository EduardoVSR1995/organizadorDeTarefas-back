import joi from 'joi';

const creatuserSchema = joi.object({
    name: joi.string().required()
})

export { creatuserSchema } ;