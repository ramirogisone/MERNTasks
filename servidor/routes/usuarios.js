// rutas para la creacion de usuarios
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {check} = require('express-validator');

// endpoint: '/api/usuarios'
router.post('/',
    [
        check('nombre').not().isEmpty().withMessage('El nombre es obligatorio'),
        check('email').isEmail().withMessage('Agrega un email válido'),
        check('password').isLength({min: 6}).withMessage('El password debe contener al menos seis caracteres')
    ],
    userController.crearUsuario
);

module.exports = router;