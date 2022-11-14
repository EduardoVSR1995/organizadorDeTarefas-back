import joi from 'joi';
var creatuserSchema = joi.object({
    name: joi.string().required(),
    password: joi.string().required()
});
var creatassignmentSchema = joi.object({
    name: joi.string().required(),
    assignment: joi.string().required(),
    date: joi.date().required()
});
var authorizationSchema = joi.object({
    authorization: joi.string().pattern(/^Bearer /).required()
});
export { creatuserSchema, creatassignmentSchema, authorizationSchema };
