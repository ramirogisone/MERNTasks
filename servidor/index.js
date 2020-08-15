const express = require('express');
const conectarDB = require('./config/db');

// creacion del servidor
const app = express();

// conectar a la db
conectarDB();

// habilitar express.json
app.use(express.json({extended: true}));

// puerto de la app
const PORT = process.env.PORT || 4000;

// importar usuarios
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => {
    console.log(`El servidor está funcionando en el puerto ${PORT}`);
})