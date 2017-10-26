import data from '../model/data';
import newData from './index';

class Recipe {
    static getRecipe(req, res){
        res.status(200).json({ feed: data });
    };

    static postRecipe(req, res){
        newData.dataObj.dataObj.recipes.push({
            id: newData.dataObj.dataObj.recipes.length + 1,
            name: req.body.name,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
          });
          res.status(200).json({ feed: newData.dataObj });
    }

}

export default Recipe;