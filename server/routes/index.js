import newData from '../controllers';
import recipe from '../controllers/recipe';

module.exports = (app) => {
  // Home Route
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome Home',
  }));
  // Get routet returning all data back to the client
  app.get('/api/v1/recipes', recipe.getRecipe);
  // Post route
  app.post('/api/v1/recipes', recipe.postRecipe);

  app.delete('/api/v1/recipes/:recipeId', (req, res) => {
    for (let i = 0; i <= newData.dataObj.dataObj.recipes.length; i++) {
      if (newData.dataObj.dataObj.recipes[i].id == req.params.recipeId) {
        newData.dataObj.dataObj.recipes.splice(i, 1);
        res.status(201).json({
          message: 'Recipe has been deleted successfully, so there is nothing for us to return to you',
        });
      } else {
        return res.status(400).json({
          message: 'Recipe has  not been deleted successfully. Something went wrong.',
        });
      }
    }
  });

  app.post('/api/v1/recipes/:recipeId/reviews', (req, res) => {
    newData.reviewData.reviewData.review.push({
      id: newData.reviewData.reviewData.review.length + 1,
      content: req.body.content,
    });
    res.status(201).json({ status: 'Review posted successful.', feed: newData.reviewData });
  });
};
