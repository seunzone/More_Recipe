import db from '../models/jsondata';

class Recipes {
        /*
        * getAllRecipes function with params @req, @res
        *
        */
getAllRecipes(req, res) {
// Get request for all the recipes
return res.send(db.recipes);
}

        /*
* getSingleRecipes function with @params id, and a return type of array
*
*/
        getSingleRecipe(req, res) {
                db
                        .Recipes
                        .findById(req.params.id)
                        .then((recipe) => {
                                res
                                        .status(200)
                                        .json({status: 200, data: recipe});
                        })
                        .catch(error => {
                                res
                                        .status(500)
                                        .json({status: 500, message: error.message});
                        })
        }

        /*
* addRecipe function with params @req, @res
*
*/
        addRecipe(req, res) {
                validate.validateAddRecipes(req, res);
                var errors = req.validationErrors();
                if (errors) {
                        res.send(errors);
                } else {
                        db
                                .Recipes
                                .create(req.body)
                                .then((result) => {
                                        if (result) {
                                                res
                                                        .status(201)
                                                        .json({status: 201, message: "Recipe added"});
                                        } else {
                                                res
                                                        .status(400)
                                                        .json({status: 400, message: "no result returned"});
                                        }
                                })
                                .catch(error => {
                                        res
                                                .status(500)
                                                .json({status: 500, message: error.message});
                                })
                }

        }

        /*
* Delete recipe function with params @req, @res
*
*/
        deleteRecipe(req, res) {

                db
                        .Recipes
                        .destroy({
                                where: {
                                        id: req.params.id
                                }
                        })
                        .then((result) => {
                                if (result) {
                                        res.status(200)
                                                .json({message: "Data deleted"});
                                }
                        })
                        .catch(err => {
                                res
                                        .status(400)
                                        .json({message: err.message});
                        });

        }

        updateRecipe(req, res) {

                db
                        .Recipes
                        .update(req.body, {
                                where: {
                                        id: req.params.id
                                }
                        })
                        .then((result) => {
                                if (result) {
                                        res
                                                .status(200)
                                                .json({message: "Data Updated"});
                                }
                        })
                        .catch(err => {
                                res
                                        .status(400)
                                        .json({message: err.message});
                        });

        }

        reviewRecipe(req, res) {

                db
                        .Reviews
                        .create(req.body)
                        .then((result) => {
                                res
                                        .status(200)
                                        .json({status: 200, data: result});
                        })
                        .catch(error => {
                                res.json(error);
                        })

        }

        getReviews(req, res) {

                db
                        .Reviews
                        .findAll({
                                where: {
                                        recipeId: req.params.id
                                }
                        })
                        .then((result) => {
                                if (result) {
                                        res
                                                .status(200)
                                                .json({status: 200, data: result});
                                }

                        })
                        .catch(error => {
                                res.json(error);
                        })

        }

        addUpvote(req, res) {
        
        db.Recipes.fineOne({ where: {
                recipeId: req.params.id
        }})
                .then(user => {
                const newVote = user.upvotes + 1;
                db
                .Recipes
                .update({ upvotes : newVote}, {
                        where: {
                                recipeId: req.params.id
                        }
                })
                .then((result) => {
                        if (result) {
                                res
                                        .status(200)
                                        .json({status: 200, data: "Vote added"});
                        }
                })
                .catch(error => {
                        res.status(500).json({ status: 500, message: err.message});
                })
                })
                .catch(err =>{
                res.status(500).json({ status: 500, message: err.message});
                });
                
        }

        addDownvote(req, res) {
        
        db.Recipes.fineOne({ where: {
                recipeId: req.params.id
        }})
                .then(user => {
                db
                .Recipes
                .update({ downvotes : recipe.upvote + 1}, {
                        where: {
                                recipeId: req.params.id
                        }
                })
                .then((result) => {
                        if (result) {
                                res
                                        .status(200)
                                        .json({status: 200, data: "Vote added"});
                        }
                })
                .catch(error => {
                        res.json(error);
                })
                })
                .catch(err =>{
                res.status(500).json({ status: 500, message: err.message});
                });

        }


        search(req, res) {

                db
                        .Recipes
                        .findAll({
                                where: {
                                        id: req.params.id
                                }
                        })
                        .then((items) => {
                                if (items) {
                                        res
                                                .status(200)
                                                .json({ status : 200, data: items});
                                }
                        })
                        .catch(err => {
                                res
                                        .status(400)
                                        .json({message: err.message});
                        });
        }
}

export default new Recipes();