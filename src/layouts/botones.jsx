import {Link} from 'react-router-dom' 

const Botones = () => {
    return (
        <>
          <div className="navbar-nav">
            <Link className="nav-link botonNav" to="/obra" >Obra</Link>
            <Link className="nav-link botonNav" to="/servicios" >Servicios</Link>
            <Link className="nav-link botonNav" to="/contacto" >Contacto</Link>
            <Link className="nav-link botonNav" to="/quiensoy" >Quien Soy</Link>
            <Link className="nav-link botonNav carritoNav" to="/carrito" >Carrito</Link>


      </div>  
        </>
    );
}

export default Botones;
