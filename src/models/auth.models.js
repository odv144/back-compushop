import { db } from "../data/data.js";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export function obtenerUser(email, pass) {
  return new Promise(async (res, rej) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));

      querySnapshot.forEach((doc) => {
        if (doc.data().email === email && doc.data().pass === pass) {
          const users = { ...doc.data() };

          res(users);
        }
      });
      res(null);
    } catch (error) {
      console.log(error);
      rej(error);
    }
  });
}
/*

export function agregarProducto(producto){
  return(
    new Promise(async (res, rej) => {
        try{
          const docRef = await addDoc(collection(db, "products"), producto);
          console.log("Doc ID: ", docRef.id, "Producto: ", docRef)
          res({...producto, id: docRef.id})
        }catch(error){
          console.log(error)
          rej(error)
        }
    })
  )

}

//agregarProducto({nombre: "yerba", categoria: "infusion", precio: 200})
/*
export function actualizarProducto(id, producto){
  return(
    new Promise(async (res, rej) => {
      try{
        await updateDoc(doc(db, "products", id), {
          ...producto
        })
        console.log("producto actualizado")
        res({})
      }catch(error){
        console.log(error)
        rej(error)
      }
    })
  )

}*/

//actualizarProducto({id: "6VOeGkGEHLxBrdU3QVzV", precio: 220})
/*
export function eliminarProducto(id){
  return(
    new Promise(async (res, rej) => {
      try{
        await deleteDoc(doc(db, "products", id));
        console.log("Producto eliminado")
        res()
      }catch(error){
        console.log(error)
        rej(error)
      }
    })
  )

}
*/
