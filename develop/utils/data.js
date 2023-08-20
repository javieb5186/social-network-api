const react = [
  {
    reactionBody: 'I do too',
    username: 'Jul Tol',
  },
  {
    reactionBody: 'Me too',
    username: 'Aly Tol',
  },
  {
    reactionBody: 'Which ones?',
    username: 'Jay Bay',
  }
]

const thought = [
  {
    thoughtText: 'I love dogs.',
    username: 'jaybay',
    reactions: react[0],
  },
  {
    thoughtText: 'I love cats.',
    username: 'Jul Tol',
    reactions: react[1],
  },
  {
    thoughtText: 'I love exotic animals.',
    username: 'Aly Tol',
    reactions: react[2],
  },
]

const users = [
  {
    username: 'Jay Bay',
    email: 'jaybay@gmail.com',
  },
  {
    username: 'Jul Tol',
    email: 'jultol@gmail.com',
  },
  {
    username: 'Aly Tol',
    email: 'alytol@gmail.com',
  },
]


module.exports = {users, thought};