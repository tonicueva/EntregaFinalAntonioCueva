import React, {useState, useEffect} from 'react';
import { consultaBaseDeDatos } from '../utils/consultaBaseDeDatos';
import {Link} from 'react-router-dom'

const Obra = () => {

    const [productos, setProductos] = useState([]);



    useEffect(() => {

        consultaBaseDeDatos('./productos.json').then(productos => {  
            const cardProducto = productos.map(producto =>
                <div className=" miCard card" style={{ width: "18rem" }}>
                <img src={producto.img} className=" imgCard card-img-top" alt="..." />
                    <div className="card-body">
   
                        <h5 className="card-title tituloCard">{producto.nombre}</h5>
                        <p className="card-text">
                        Precio: ${producto.precio}
                        </p>
            
                        <button className="botonVerLibro btn btn-primary" >
                        <Link className='navLink linkVerLibro' to={'/producto/' + producto.id}>Ver libro</Link>
                        </button>
                    </div>
            </div>)

            setProductos(cardProducto)
        })
        
    }, []);
    
    
    return (
        <div className='row'>
           {productos}
        </div>
    );
}

export default Obra;
