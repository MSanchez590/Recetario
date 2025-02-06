const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/dbConnection');
const recetaRoutes = require('./routes/recetaRouts');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/recetas', recetaRoutes);

sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT, () => console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`));
    })
    .catch(err => console.log(err));
