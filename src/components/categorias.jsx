import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consultaBaseDeDatos } from '../utils/consultaBaseDeDatos';
import { Link } from 'react-router-dom';

const Categorias = () => {

      const [productos, setproductos] = useState([]);
      const {id} = useParams()
      useEffect(() => {
            consultaBaseDeDatos('../productos.json').then(productos => {
                const productosCategoria = productos.filter(producto => producto.idCategoria == id)
                const cardProducto = productosCategoria.map(producto =>
                    <div className=" miCard card" style={{ width: "18rem" }}>
                    <img src={"../assets/" + producto.img} className=" imgCard card-img-top" alt="..." />
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
    
                setproductos(cardProducto)
            })
      }, [id]);


    return (
        <>
            {productos}
        </>
    );
}

export default Categorias;
