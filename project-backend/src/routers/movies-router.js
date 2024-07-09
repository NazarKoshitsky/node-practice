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
import isValidId from '../middlewares/isValidId.js';

const moviesRouter = express.Router();

moviesRouter.get('/', ctrlWrapper(getAllMoviesController));

moviesRouter.get('/:id', isValidId, ctrlWrapper(getMovieByIdController));

moviesRouter.post('/', ctrlWrapper(addMovieController));

moviesRouter.put('/:id', isValidId, ctrlWrapper(updateMovieController));

moviesRouter.patch('/:id', isValidId, ctrlWrapper(patchMovieController));

moviesRouter.delete('/:id', isValidId, ctrlWrapper(deleteMovieController));
export default moviesRouter;
