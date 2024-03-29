const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/babyreader');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  words: [{
    word: String,
    reads: Number,
    category: {
      type: String,
      enum: ['self', 'object', 'possession', 'food', 'animal', 'action']
    }
  }]
})

const User = mongoose.model('User', userSchema);

const createNewUser = async(email, password) => {
  const newUser = new User({ email: email, password: password})
  var saved = await newUser.save()
  return saved;
}

const checkUserExists = async(email) => {
  const exists = await User.exists({email: email})
  return exists;
}

const findUser = async(email, password) => {
  const data = await User.find({email: email});
  return data;
}

const updateWords = async(email, words) => {
  const res = await User.updateOne({email: email}, {words: words});
  return res;
}

const wordSchema = new mongoose.Schema({
  word: String,
  category: {
    type: String,
    enum: ['self', 'object', 'possession', 'food', 'animal', 'action']
  },
  reads: Number,
})

const Word = mongoose.model('Word', wordSchema);

const getDefaultWords = async() => {
  const words = await Word.find({});
  return words;
}

module.exports = {
  createNewUser: createNewUser,
  findUser: findUser,
  checkUserExists: checkUserExists,
  updateWords: updateWords,
  getDefaultWords: getDefaultWords,
};