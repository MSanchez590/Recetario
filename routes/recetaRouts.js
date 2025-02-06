const express = require('express');
const recipeController = require('../controllers/recetaController');
const router = express.Router();

router.get('/', recipeController.getReceta);
router.post('/', recipeController.createReceta);
router.delete('/:id', recipeController.deleteReceta);

module.exports = router;
