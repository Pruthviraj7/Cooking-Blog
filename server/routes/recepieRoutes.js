const express=require('express');
const router =express.Router();
const recepieController=require('../controllers/recepieController');

router.get('/',recepieController.homepage);
router.get('/recipe/:id',recepieController.exploreRecipe);
router.get('/categories',recepieController.exploreCategories);
router.get('/categories/:id',recepieController.exploreCategoriesById);
router.post('/search',recepieController.searchRecipe);
router.get('/explore-latest', recepieController.exploreLatest);
router.get('/explore-random', recepieController.exploreRandom);
router.get('/submit-recipe', recepieController.submitRecipe);
router.post('/submit-recipe', recepieController.submitRecipeOnPost);

module.exports = router;