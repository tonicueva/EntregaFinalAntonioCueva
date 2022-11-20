import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from '../context/CarritoContext';


const Carrito = () => {

    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState(carrito)
    useEffect(() => {
        console.log(carritoLocal)
    })


    return (
        <div>
            <h1>Carrito</h1>
        </div>
    );
}

export default Carrito;
