const connection = require('../config/connection');
const {User, Thought} = require('../models');
const user = require('./data');

connection.on('error', (err) => err);

connection.on('open', async () => {
  console.log('Connected');
  await Thought.deleteMany();
  await User.deleteMany();
  await User.collection.insertMany(user);
  console.log('Seeding complete');
  process.exit(0);
});
