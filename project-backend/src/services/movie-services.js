import Movie from '../db/models/Movie.js';

export const getMovies = () => Movie.find();

export const getMovieById = (id) => Movie.findById(id);

export const addMovie = (data) => Movie.create(data);

export const upsertMovie = async (filter, data, options = {}) => {
  const result = await Movie.findOneAndUpdate(filter, data, {
    includeResultMetadata: true,
    ...options,
  });

  if (!result || !result.value) return null;

  const isNew = Boolean(result?.lastErrorObject?.upserted);

  return {
    data: result.value,
    isNew,
  };
};

export const deleteMovie = (filter) => Movie.findOneAndDelete(filter);
