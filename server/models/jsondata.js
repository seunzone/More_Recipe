const db = [];

db.reviews = [];

db.recipes = [{
  id: 1,
  userId: 1,
  name: 'Fried Rice',
  ingredients: ['rice', 'water', 'meat'],
  description: 'Just Cook it',
  downVote: 1,
  upVote: 90
},

{
  id: 2,
  userId: 1,
  name: 'Stew',
  ingredients: ['pepper', 'tomato', 'salt'],
  description: 'Just put in water',
  downVote: 23,
  upVote: 26
},
{
  id: 3,
  userId: 1,
  name: 'Pasta',
  ingredients: ['spag', 'veg', 'water'],
  description: 'Just Cook like that',
  downVote: 90,
  upVote: 61
}

];

export default db;
