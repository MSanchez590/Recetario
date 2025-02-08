const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');

const Receta = sequelize.define('receta', {
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
        type: DataTypes.STRING, // Se almacenarán como texto separado por comas
        allowNull: false,
        get() {
            console.log(this.getDataValue("ingredients"))
            console.log("llamo a get")

          return this.getDataValue("ingredients")?.split(","); // Convertir a array al recuperar
        },
        set(value) {
            console.log("llamo a set")
          this.setDataValue("ingredients", value.join(',')); // Convertir a texto al guardar
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
    Receta.sync({alter : false});

module.exports = Receta;