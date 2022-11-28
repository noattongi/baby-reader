import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/babyreader');

const db = mongoose.connection;

interface IWord {
  word: String,
  reads: Number,
  category: String,
}

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

const createNewUser = async(email: string, password: string) => {
  const newUser = new User({ email: email, password: password})
  var saved = await newUser.save()
  return saved;
}

const findUser = async(email: string, password: string) => {
  const data = await User.find({email: email, password: password});
  return data;
}

const addWords = async(email: string, words: [{}]) => {

}

module.exports = {
  createNewUser: createNewUser,
  findUser: findUser,
};