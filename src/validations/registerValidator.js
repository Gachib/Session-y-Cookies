const {check} = require('express-validator');

module.exports = [
    check('nombre')
        .notEmpty().withMessage('El nombre es requerido'),
    check('color')
        .notEmpty().withMessage('El color es requerido'),
    check('email')
        .notEmpty().withMessage('El email es requerido').bail()
        .isEmail().withMessage('El email no es valido'),

];