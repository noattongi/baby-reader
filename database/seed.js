const {save, find} = require('./index.js');

const words = ['dog', 'cat', 'fork', 'refrigerator', 'toy'];

//this is no longer a seed function, use it to test db connection
const seed = async() => {
  var data = await find();
  console.log(data);
}

seed();