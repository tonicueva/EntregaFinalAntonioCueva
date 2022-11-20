import {cargarBaseDeDatos} from "./firebase"

export 
    const consultaBaseDeDatos = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json()
    return productos
}

cargarBaseDeDatos()