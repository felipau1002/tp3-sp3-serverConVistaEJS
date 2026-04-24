import { body } from "express-validator";



export const validacionDeNombreSuperheroe = [   // VALIDACION DE NOMBRE DE SUPERHEROE
    body('nombreSuperHeroe')
        .trim()
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre debe tener 3 caracteres como mínimo')
        .isLength({ max: 60 }).withMessage('El nombre debe tener 60 caracteres como máximo')
];



export const validacionDeNombreReal = [   // VALIDACION DE NOMBRE REAL
    body('nombreReal')
        .trim()
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre debe tener 3 caracteres como mínimo')
        .isLength({ max: 60 }).withMessage('El nombre debe tener 60 caracteres como máximo')
];



export const validacionDeEdad = [  // VALIDACION DE EDAD
    body('edad')
        .trim()
        .notEmpty().withMessage('La edad es obligatoria')
        .isNumeric().withMessage('Solo caractere numéricos')
        .isInt({ min: 0 }).withMessage('La edad debe ser un número positivo')
];



export const validacionDePlaneta = [   // VALIDACION DE PLANETA DE ORIGEN
    body('planetaOrigen')
        .trim()
        .notEmpty().withMessage('El nombre del planeta es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre debe tener 3 caracteres como mínimo')
        .isLength({ max: 60 }).withMessage('El nombre debe tener 60 caracteres como máximo')
];



export const validacionDeDebilidades = [   // VALIDACION DE DEBILIDADES
    body('debilidad')
        .isArray({ min: 1 }).withMessage('Debe haber al menos un poder'),

    body('debilidad.*')
        .optional({ checkFalsy: true })
        .trim()
        .isLength({ min: 3 }).withMessage('Cada poder debe tener al menos 3 caracteres')
        .isLength({ max: 60 }).withMessage('Cada poder debe tener menos de 60 caracteres')
];



export const validacionDePoderes = [   // VALIDACION DE PODERES
    body('poderes')
        .isArray({ min: 1 }).withMessage('Debe haber al menos una debilidad'),

    body('poderes.*')
        .optional({ checkFalsy: true })
        .trim()
        .isLength({ min: 3 }).withMessage('Cada debilidad debe tener al menos 3 caracteres')
        .isLength({ max: 60 }).withMessage('Cada debilidad debe tener menos de 60 caracteres')
];



export const validacionDeAliados = [   // VALIDACION DE ALIADOS
    body('aliados')
        .isArray({ min: 1 }).withMessage('Debe haber al menos un aliado'),

    body('aliados.*')
        .optional({ checkFalsy: true })
        .trim()
        .isLength({ min: 3 }).withMessage('Cada aliado debe tener al menos 3 caracteres')
        .isLength({ max: 60 }).withMessage('Cada aliado debe tener menos de 60 caracteres')
];



export const validacionDeEnemigos = [   // VALIDACION DE ENEMIGOS
    body('enemigos')
        .isArray({ min: 1 }).withMessage('Debe haber al menos un enemigo'),

    body('enemigos.*')
        .optional({ checkFalsy: true })
        .trim()
        .isLength({ min: 3 }).withMessage('Cada enemigo debe tener al menos 3 caracteres')
        .isLength({ max: 60 }).withMessage('Cada enemigo debe tener menos de 60 caracteres')
];



export const validacionDeCreadores = [   // VALIDACION DE CREADORES
    body('creador')
        .isArray({ min: 1 }).withMessage('Debe haber al menos un creador'),

    body('creador.*')
        .optional({ checkFalsy: true })
        .trim()
        .isLength({ min: 3 }).withMessage('Cada creador debe tener al menos 3 caracteres')
        .isLength({ max: 60 }).withMessage('Cada creador debe tener menos de 60 caracteres')
];