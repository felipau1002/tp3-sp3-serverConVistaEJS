import express from 'express';
import { obtenerTodosLosSuperheroesController, crearSuperheroeController, actualizarSuperheroeController, eliminarSuperheroePorIDController, obtenerSuperheroePorIDController } from '../controllers/superHeroController.mjs';
import { body, validationResult } from 'express-validator';
import { middlewareErrores } from '../middlewares/middlewareErrores.mjs'
import { validacionDeNombreSuperheroe, validacionDeNombreReal, validacionDeEdad, validacionDePlaneta, validacionDeDebilidades, validacionDePoderes, validacionDeAliados, validacionDeEnemigos, validacionDeCreadores } from '../validations/validacionesSuperheroes.mjs'


const router = express.Router();


router.get('/superheroes', obtenerTodosLosSuperheroesController);



router.get('/superheroes/agregar', (req, res) => {
    res.render('agregarSuperheroe');
})

router.post(
    '/superheroes/agregar',
    validacionDeNombreSuperheroe,
    validacionDeNombreReal,
    validacionDeEdad,
    validacionDePlaneta,
    validacionDeDebilidades,
    validacionDePoderes,
    validacionDeAliados,
    validacionDeEnemigos,
    validacionDeCreadores,
    middlewareErrores,
    crearSuperheroeController
);


router.get('/superheroes/editar/:id', obtenerSuperheroePorIDController);

router.put(
    '/superheroes/editar/:id',
    validacionDeNombreSuperheroe,
    validacionDeNombreReal,
    validacionDeEdad,
    validacionDePlaneta,
    validacionDeDebilidades,
    validacionDePoderes,
    validacionDeAliados,
    validacionDeEnemigos,
    validacionDeCreadores,
    middlewareErrores,
    actualizarSuperheroeController
);



router.delete('/superheroes/:id', eliminarSuperheroePorIDController);


export default router;