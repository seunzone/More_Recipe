import * as Recipe from '../controllers/controllerRecipe';
import * as Review from '../controllers/controllerReview';
import * as Upvote from '../controllers/controllerUpVote';


const recipe = new Recipe.default();
const review = new Review.default();
const upvote = new Upvote.default();


const router = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Welcome to more-recipes api');
  });
  app.post('/api/v1/recipes', recipe.addRecipe);// Post Recipes
  app.put('/api/v1/recipes/:recipeId', recipe.updateRecipe); // Modifies the recipes
  app.post('/api/v1/recipes/:recipeId/review', review.addReview); // Review for recipes
  app.delete('/api/v1/recipes/:recipeId', recipe.deleteRecipe); // Deletes recipes
  app.get('/api/v1/recipes?sort=up&order=des', upvote.getUpvotes); // Vote for recipes
  app.get('/api/v1/recipes', recipe.getAllRecipes); // This route gets all recipes
};

export default router;

