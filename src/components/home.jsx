import React from 'react';

const Home = () => {
    return (
        <>
            <div className='row'>
                <div>
                    <h1 className='tituloMain'>
                        Verónica Berenstein
                    </h1>
                </div>
                <div>
                    <h2 className="subtituloMain">
                        Escritora, psicoanalista y profesora
                    </h2>
                </div>
            </div>
            <div className='row fotoTextoMain'>
                <div className='fotoVeronica col-lg-6 col-ls-12'>
                    <img className='fotoVero' src='./assets/fotoVero.jpg'/>
                </div>
                <div className='textoVeronica col-lg-6 col-ls-12'>
                    <h1>"Hay más por descubrir"</h1>
                </div>
            </div>
        </>
    );
}

export default Home;
