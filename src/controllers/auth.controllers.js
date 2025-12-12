import { generateToken } from "../data/token.js";
import { obtenerUser } from "../models/auth.models.js";
import { validarCredenciales } from "../services/auth.services.js";

export const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    const user = await validarCredenciales(email, password);
       
    if(user!==null){
        const token = await generateToken(user);
       res.json({ token });
    } else {
        res.sendStatus(401);
    }
    
}