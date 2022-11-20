
import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, updateDoc, getDoc, getDocs, deleteDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "veronica-berenstein.firebaseapp.com",
  projectId: "veronica-berenstein",
  storageBucket: "veronica-berenstein.appspot.com",
  messagingSenderId: "197538531890",
  appId: "1:197538531890:web:5ea757913675e3eb494a2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBaseDeDatos = async () => {
    const promise = await fetch('./productos.json')
    const productos = await promise.json()
    productos.forEach( async(producto) => {
      await addDoc(collection(db,"productos"), {
        nombre: producto.nombre,
        marca: producto.marca,
        modelo: producto.modelo,
        categoria: producto.categoria,
        stock: producto.stock,
        precio: producto.precio,
        img: producto.img
      })
    })
}


// Actualizar información //

const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db, "productos", id), info)
  return estado
}

const deleteProducto = async(id) => {
  const estado = await deleteDoc(doc(db,"productos",id))
  return estado
}

const createProducto = async (objProd)=> {
  const estado = await addDoc(collection(db, "productos"), {
    nombre: objProd.nombre,
    marca: objProd.marca,
    modelo: objProd.modelo,
    categoria: objProd.categoria,
    stock: objProd.stock,
    precio: objProd.precio,
    img: objProd.img
  })
  return estado
}

// Fin actualización de INFO //

// Creo orden de compra //

const createOrdenCompra = async (preTotal, nombre, apellido, email, dni, direccion) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    nombre: nombre,
    apellido: apellido,
    email: email,
    dni: dni,
    direccion: direccion,
    precioTotal: preTotal
  })
  
  return ordenCompra
}

const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db,"ordenCompra",id))
  return ordenCompra
}


export {cargarBaseDeDatos, updateProducto, deleteProducto, createProducto, createOrdenCompra, getOrdenCompra}