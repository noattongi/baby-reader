const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
var {findUser, createNewUser, updateWords} = require('../database/index')

const app = express();
app.use(express.json());
app.use(cors());

app.get('/user', async(req, res) => {
  const data = await findUser();
  console.log(data);
  res.send(data);
})

app.post('/user', async(req, res) => {
  console.log(req.body);
  const user = req.body;
  //check if user already exists
  const userDoc = await findUser(user.email);
  //if it does send a failure response
  if (userDoc.length > 0) {
    res.send('A user with that email already exists')
  }
  else {
    bcrypt.hash(user.password, 10)
    .then((hash) => {
      createNewUser(user.email, hash)
    })
    .then(() => {
      res.send('success');
    })
    .catch((err) => {
      res.error(err);
    })
  }
  //otherwise save the user and hash the password to be saved
})

app.listen(3001, () => {
  console.log('listening on port 3001');
})