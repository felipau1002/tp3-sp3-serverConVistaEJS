import { validationResult } from 'express-validator';


export const middlewareErrores = (req, res, next) => {   // MIDDLEWARE
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({ error: errores.array() });
    }
    next();
};