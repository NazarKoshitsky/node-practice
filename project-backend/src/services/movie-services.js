import Movie from '../db/models/Movie.js';

export const getMovies = async ({ page, perPage }) => {
  const skip = (page - 1) * perPage;
  const items = await Movie.find().skip(skip).limit(perPage);
  const totalItems = await Movie.countDocuments();
  return { items, totalItems };
};

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
