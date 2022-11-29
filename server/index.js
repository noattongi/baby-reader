const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
var {checkUserExists, findUser, createNewUser, updateWords} = require('../database/index')

const app = express();
app.use(express.json());
app.use(cors());

//login to user
app.get('/user', async(req, res) => {
  const login = req.query;
  const data = await findUser(login.email);
  const user = data[0];
  bcrypt.compare(login.password, user.password)
  .then((valid) => {
    if (valid) {
      res.send(user);
    } else {
      res.send(null);
    }
  })
  .catch((err) => {
    console.log(err);
  })
})

//create new user
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
})

app.listen(3001, () => {
  console.log('listening on port 3001');
})