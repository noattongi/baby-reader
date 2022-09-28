const save = require('./index.js');

const words = ['dog', 'cat', 'fork', 'refridgerator', 'toy'];

for (word of words) {
  save(word);
}