const connection = require('../config/connection');
const {User, Thought} = require('../models');
const {users} = require('./data');

connection.on('error', (err) => err);

connection.on('open', async () => {
  console.log('Connected');
  await Thought.deleteMany();
  await User.deleteMany();
  await User.collection.insertMany(users);
  console.log('Seeding complete')
  process.exit(0);
});