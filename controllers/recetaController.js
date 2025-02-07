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

// Obtener recetas por ID
exports.getRecetaID = async (req, res) => {
    try {
        const receta = await Receta.findByID(req.params.id);
        if(!receta) return res.status(404).json({message: "Receta no encontrada"})
        res.json(receta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear una nueva receta
exports.createReceta = async (req, res) => {
    try {
        /*if (req.user.role != "admin") {
            return res.status(403).json({message: "Sin Autorización"});
        }*/

        const { name, description, ingredients, instructions, image, category } = req.body;
        const newReceta = await Receta.create({ name, description, ingredients, instructions, image, category });
        res.status(201).json(newReceta);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Actualizar una receta
exports.updateReceta = async (req, res) => {
    try {
      if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Sin Autorización" });
      }
  
      const updatedReceta = await Receta.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedReceta) return res.status(404).json({ message: "Receta no encontrada" });
  
      res.json(updatedReceta);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Eliminar una receta
exports.deleteReceta = async (req, res) => {
    try {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Sin Autorización" });
        }

        await Receta.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Receta eliminada' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
