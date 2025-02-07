const express = require('express');
const recipeController = require('../controllers/recetaController');
const router = express.Router();

router.get('/', recipeController.getReceta);
router.get("/:id", recipeController.getRecetaID);
router.post('/createReceta', recipeController.createReceta);
router.put("/:id", recipeController.updateReceta);
router.delete('/:id', recipeController.deleteReceta);

module.exports = router;
