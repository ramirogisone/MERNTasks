// rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const authController = require('../controllers/authController');

// endpoint: '/api/auth'
router.post('/',
    [
        check('email').isEmail().withMessage('Agrega un email válido'),
        check('password').isLength({min: 6}).withMessage('El password debe contener al menos seis caracteres')
    ],
    authController.autenticarUsuario
);

module.exports = router;