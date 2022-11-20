import React, {useState} from 'react';

const Contador = () => {
    
    const [Contador, setContador] = useState(0);
    function contarClicks() {
        setContador(Contador + 1 )
    }
    return (
        <>
           <button onClick={() => contarClicks()}>Click</button>
            <h1>{Contador}</h1>   
        </>
    );
}
export default Contador;
