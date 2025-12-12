import { obtenerUser } from "../models/auth.models.js";
export const validarCredenciales = async (email,pass) => {
  return(
    new Promise(async(res, rej) => {
      try{
        const user = await obtenerUser(email,pass)
        
        res(user)
      }catch(error){
        rej(error)
      }
    })
  )
};