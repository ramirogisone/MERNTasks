const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {

    // verificar errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ) {
        return res.status(400).json({errores: errores.array()})
    }
    const {email, password} =  req.body;

    try {
        // validar que el usuario esta registrado
        let usuario = await Usuario.findOne({email});
        if(!usuario){
            return res.status(400).json({msg: 'El usuario no existe'});
        }
        // validar pass
        const passOk = await bcryptjs.compare(password, usuario.password);
        if(!passOk){
            return res.status(400).json({msg: 'El password es incorrecto'});
        }
        // crear y firmar JWT
        const payload = {
            usuario: {
                id: usuario.id
            }
        }
        jwt.sign(payload, process.env.PALABRASECRETA, {
            expiresIn: 3600 // una hora expresada en segundos
        }, (error, token) => {
            if(error) throw error;
            res.json({token});
        });
    } catch (error) {
        console.log(error);
    }
}