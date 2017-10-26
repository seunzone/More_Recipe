const db = [];

db.reviews = [];

db.recipes = [{
  id: 1,
  userId: 1,
  name: 'Fried Rice',
  ingredient: ['pepper', 'salt', 'water'],
  description: 'Just do it',
  downVote: 7,
  upVote: 25
},

{
  id: 2,
  userId: 1,
  name: 'Chicken stew',
  ingredient: ['stew', 'salt', 'water'],
  description: 'Anyhow bro',
  downVote: 8,
  upVote: 33
},
{
  id: 3,
  userId: 1,
  name: 'Fried Ugwu',
  ingredient: ['pepper', 'salt', 'ugwu'],
  description: 'make it rain',
  downVote: 7,
  upVote: 25
}

];

export default db;