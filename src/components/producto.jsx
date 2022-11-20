import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import DetalleProducto from './detalleProducto';
import detalleProducto from './detalleProducto';

const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
       fetch('../productos.json')
       .then(response => response.json())
       .then(productos => {
            const producto1 = productos.find(productoArray => productoArray.id == id)
            setProducto(producto1)
            console.log(producto1)
       })
    }, []);



    return (
        <> 
            <DetalleProducto producto={producto}/>
        </>
    );
}

export default Producto;
