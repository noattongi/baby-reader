const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
var {checkUserExists, validateUser, createNewUser, updateWords} = require('../database/index')

const app = express();
app.use(express.json());
app.use(cors());

app.get('/user', async(req, res) => {
  const data = await validateUser();
  console.log(data);
  res.send(data);
})

app.post('/user', async(req, res) => {
  console.log(req.body);
  const user = req.body;
  //check if user already exists
  checkUserExists(user.email)
  .then((status) => {
    var exists = (status !== null)
    if (exists) {
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
  })
  //if it does send a failure response

  //otherwise save the user and hash the password to be saved
})

app.listen(3001, () => {
  console.log('listening on port 3001');
})