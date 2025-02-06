const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');

const Receta = sequelize.define('Receta', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    ingredients: { type: DataTypes.TEXT, allowNull: false },
    instructions: { type: DataTypes.TEXT, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: true
});

module.exports = Receta;
