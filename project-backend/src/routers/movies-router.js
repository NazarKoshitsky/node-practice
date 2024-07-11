import express from 'express';
import {
  getAllMoviesController,
  getMovieByIdController,
  addMovieController,
  updateMovieController,
  deleteMovieController,
  patchMovieController,
} from '../controllers/movies-controller.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';

import isValidId from '../middlewares/isValidId.js';
import { movieAddSchema } from '../validation/movie-schemas.js';

const moviesRouter = express.Router();

moviesRouter.get('/', ctrlWrapper(getAllMoviesController));

moviesRouter.get('/:id', isValidId, ctrlWrapper(getMovieByIdController));

moviesRouter.post(
  '/',
  validateBody(movieAddSchema),
  ctrlWrapper(addMovieController),
);

moviesRouter.put('/:id', isValidId, ctrlWrapper(updateMovieController));

moviesRouter.patch('/:id', isValidId, ctrlWrapper(patchMovieController));

moviesRouter.delete('/:id', isValidId, ctrlWrapper(deleteMovieController));
export default moviesRouter;
