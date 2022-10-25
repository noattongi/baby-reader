const save = require('./index.js');

const words = ['dog', 'cat', 'fork', 'refrigerator', 'toy'];

for (word of words) {
  save(word)
}

console.log('database seeding complete');
process.exit();