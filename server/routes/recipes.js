import express from 'express';
import recipes from '../controllers/recipes';

const router = express.Router();

// get route for all the recipes
router.get('/', recipes.getAllRecipes);

// get single user from json data
router.get('/:id',  recipes.getSingleRecipe );


// post recipe to json data
router.post('/', recipes.addRecipe );

// delete recipe from the json data
router.delete('/:id', recipes.deleteRecipe);

// update recipe in json data
router.put('/:id', recipes.updateRecipe);

// Add a review to a recipe
router.post('/:id/reviews', recipes.reviewRecipe);

// Upvote up a recipe
router.post('/:id/upvotes', recipes.addUpvote);

// Downvote up a recipe
router.post('/:id/downvotes', recipes.addDownvote);

export default router;