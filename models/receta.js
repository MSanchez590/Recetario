const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');

const Receta = sequelize.define('Receta', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ingredients: {
        type: DataTypes.TEXT, // Se almacenarán como texto separado por comas
        allowNull: false,
        get() {
          return this.getDataValue("ingredients")?.split(","); // Convertir a array al recuperar
        },
        set(value) {
            
          this.setDataValue("ingredients", value); // Convertir a texto al guardar
        },
      },
      instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING, // URL de la imagen de la receta
        allowNull: true, // No obligatorio
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.INTEGER, // (si se implementa autenticación)
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    });

module.exports = Receta;
