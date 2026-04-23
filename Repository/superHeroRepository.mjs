import superHero from "../models/superheroe.mjs";
import IRepository from "./IRepository.mjs";


class SuperHeroRepository extends IRepository {

    static async obtenerTodos() {
        return await superHero.find({});
    }

    static async crearSuperheroe(superheroe) {
        const nuevoHeroe = new superHero(superheroe);
        return await nuevoHeroe.save();
    }

    static async actualizarSuperheroe(id, datosActualizados) {
        return await superHero.findByIdAndUpdate(id, datosActualizados, { new: true });
    }

    static async eliminarSuperheroePorID(id) {
        return await superHero.findByIdAndDelete(id);
    }

    static async eliminarSuperheroePorNombre(nombreSuperHeroe) {
        return await superHero.findOneAndDelete({ nombreSuperHeroe });
    }

    static async obtenerSuperheroePorID(id) {
        return await superHero.findById(id);
    }
}


export default SuperHeroRepository;