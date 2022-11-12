const express = require('express');
const {find, save} = require('../database/index')

const app = express();
app.use(express.json());

app.get('/words', async(req, res) => {
  const data = await find();
  console.log(data);
  res.send(data);
})

app.post('/signup', (req, res) => {
  console.log(req.params);
  //check if user already exists
  //if it does send a failure response
  //otherwise save the user and hash the password to be saved
})

app.listen(3001, () => {
  console.log('listening on port 3001');
})