const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/baby-reader');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const wordSchema = new mongoose.Schema({
  word: String,
  reads: { type: Number, default: 0},
})

const Word = mongoose.model('Word', wordSchema);

const save = (word) => {
  const newWord = new Word({ word: word })
  newWord.save((err) => {
    if (err) return handleError(err);
  })
}

module.exports = save;