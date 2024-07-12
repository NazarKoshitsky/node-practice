import Joi from 'joi';
import { typeList, releaseYearRegexp } from '../constants/movies-constants.js';

export const movieAddSchema = Joi.object({
  title: Joi.string().required(),
  dorector: Joi.string().required(),
  type: Joi.string().valid(...typeList),
  releaseYear: Joi.string().pattern(releaseYearRegexp).required(),
});

export const movieUpdateSchema = Joi.object({
  title: Joi.string(),
  dorector: Joi.string(),
  type: Joi.string().valid(...typeList),
  releaseYear: Joi.string().pattern(releaseYearRegexp),
});
