const express = require('express');

const app = express();
app.use(express.json());

app.get('/words', (req, res) => {

})

app.listen(3001, () => {
  console.log('listening on port 3001');
})