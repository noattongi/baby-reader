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
  password: String
})

const User = mongoose.model('User', userSchema);

const createNewUser = async(email, password) => {
  const newUser = new User({ email: email, password: password})
  var saved = await newUser.save()
  return saved;
}

const findUser = async() => {
  const data = await User.find({email: email, password: password});
  return data;
}

module.exports = {
  createNewUser: createNewUser,
  findUser: findUser,
};