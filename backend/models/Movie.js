
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  synopsis: { type: String },
  duration: { type: String },
  releaseDate: { type: Date, required: true },
  rating: { type: String },
  showtimes: [{ type: Date }],
  posterUrl: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Movie', movieSchema);
