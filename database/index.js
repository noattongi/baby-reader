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

const findUser = async(email, password) => {
  const data = await User.find({email: email, password: password});
  return data;
}

const updateWords = async(email, words) => {
  const res = await User.updateOne({email: email}, {words: words});
  return res;
}

module.exports = {
  createNewUser: createNewUser,
  findUser: findUser,
  updateWords: updateWords,
};