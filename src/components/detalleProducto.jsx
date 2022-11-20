import React from 'react';

const DetalleProducto = ({producto}) => {
    return (
        <>
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={producto.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{producto.nombre}</h2>
                            <h3 className='card-subtitle'> Precio: ${producto.precio}</h3>
                        </div>
                        <div>
                            <button className='btn btn-primary'>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetalleProducto;
