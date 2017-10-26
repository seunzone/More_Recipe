// imort express module
import express from 'express'

//import indivdual routes
import recipes from './recipes';

const router = express.Router();
/* GET home page. */
router.get('/', (req, res) => {
	res.json({ message : "this is a test message"});
});

/* GET user api. */
// router.use('/users', users);

//  GET recipe api. 
router.use('/recipes', recipes);

export default router;