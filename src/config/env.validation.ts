import * as Joi from 'joi';

export const validationSchema = Joi.object({
  // App
  APP_PORT: Joi.number().default(2017),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
});
