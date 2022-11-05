const express = require('express');
const {find, save} = require('../database/index')

const app = express();
app.use(express.json());

app.get('/words', async(req, res) => {
  const data = await find();
  console.log(data);
  res.send(data);
})

app.

app.listen(3001, () => {
  console.log('listening on port 3001');
})