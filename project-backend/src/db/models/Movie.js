import { Schema, model } from 'mongoose';
import {
  typeList,
  releaseYearRegexp,
} from '../../constants/movies-constants.js';
import { mongooseSaveError, setUpdateSettings } from './hooks.js';

const movieShema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: typeList,
      default: 'film',
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    releaseYear: {
      type: String,
      match: releaseYearRegexp,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

movieShema.post('save', mongooseSaveError);
movieShema.post('findOneAndUpdate', mongooseSaveError);
movieShema.pre('findOneAndUpdate', setUpdateSettings);

const Movie = model('movie', movieShema);

export default Movie;
