const express = require('express');
const conectarDB = require('./config/db');

// creacion del servidor
const app = express();

// conectar a la db
conectarDB();

// puerto de la app
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
})