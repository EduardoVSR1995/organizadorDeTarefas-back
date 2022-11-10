import joi from 'joi';

const creatuserSchema = joi.object({
    name:       joi.string().required(),
    password:   joi.string().required()
})

const creatassignmentSchema = joi.object({
    name:           joi.string().required(),
    assignment :    joi.string().required()
})

const authorizationSchema = joi.object({
    authorization: joi.string().pattern(/^Bearer /).required()
  });

  

export { creatuserSchema , creatassignmentSchema, authorizationSchema} ;