const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/babyreader');

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
  category: String,
})

const Word = mongoose.model('Word', wordSchema);

const save = async(word) => {
  const newWord = new Word({ word: word })
  var saved = await newWord.save()
  return saved;
}

const find = async() => {
  const data = await Word.find({});
  return data;
}

module.exports = {
  save: save,
  find: find
};