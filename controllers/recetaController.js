const Receta = require('../models/receta');

// Obtener todas las recetas
exports.getReceta = async (req, res) => {
    try {
        const recetas = await Receta.findAll();
        res.json(recetas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva receta
exports.createReceta = async (req, res) => {
    try {
        const { name, ingredients, instructions, category } = req.body;
        const newReceta = await Receta.create({ name, ingredients, instructions, category });
        res.status(201).json(newReceta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar una receta
exports.deleteReceta = async (req, res) => {
    try {
        await Receta.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Receta eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
