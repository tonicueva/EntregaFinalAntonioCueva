import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Obra from './components/obra'
import Producto from './components/producto'
import Servicios from './components/servicios'
import Quiensoy from './components/quiensoy'
import Contacto from './components/contacto'
import Home from './components/home';
import Carrito from './components/carrito'
import Footer from './components/footer'
import DetalleProducto from './components/detalleProducto'
import Contador from './layouts/contador';
import Categorias from './components/categorias';


import './App.css'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/obra" element={<Obra/>}/>
                    <Route path="/producto/:id" element={<Producto/>}/>
                    <Route path="/categoria/:id" element={<Categorias/>}/>
                    <Route path="/servicios" element={<Servicios/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/quiensoy" element={<Quiensoy/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
    );
}


export default App;
