import { obtenerTodosLosSuperheroes, crearNuevoSuperheroe, actualizarSuperheroe, eliminarSuperheroePorID, obtenerSuperheroePorID } from "../services/superHeroServices.mjs";




export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        res.render('dashboard', { superheroes });
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroes no encontrados', error: error.message});
    }
}


export async function crearSuperheroeController(req, res) {
    try {
        const nuevoSuperheroe = await crearNuevoSuperheroe(req.body);

        res.redirect('/api/superheroes');
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroe no creado', error: error.message});
    }
}


export async function actualizarSuperheroeController(req, res) {
    try {
        const { id } = req.params;
        const datosActualizados = req.body;
        const superheroeActualizado = await actualizarSuperheroe(id, datosActualizados);
        if(!superheroeActualizado) {
            return res.status(404).json({ mensaje: 'Superheroe no encontrado' });
        }

        res.redirect('/api/superheroes');
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroe no actualizado', error: error.message})
    }
}


export async function eliminarSuperheroePorIDController(req, res) {
    try {
        const { id } = req.params;
        const superheroeEliminado = await eliminarSuperheroePorID(id);
        if(!superheroeEliminado) {
            return res.status(404).json({ mensaje: 'Superheroe no encontrado' });
        }

        res.redirect('/api/superheroes');
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroe no eliminado', error: error.message})
    }
}


export async function obtenerSuperheroePorIDController(req, res) {
    try{
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorID(id);

        if(!superheroe) {
            return res.status(404).json({ mensaje: 'Superheroe no encontrado' });
        }

        res.render('editarSuperheroe', { superheroe });
    }   catch(error) {
        res.status(500).send({mensaje: 'Superheroe no eliminado', error: error.message})
    }
}