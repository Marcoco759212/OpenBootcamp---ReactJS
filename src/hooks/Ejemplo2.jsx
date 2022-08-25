/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect( )
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //2 contadores diferentes
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);


    const miRef = useRef();


    const incrementar1 = () =>{
        setContador1(contador1 +1)
    }

    const incrementar2 = () => {
        setContador2(contador2 +1)
    }

    /**
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * cada vez que haya un cambio dentro del estado del componente 
     * se ejecuta lo que esté dentro de useEffect()
     */
    // useEffect(() => {
    //     console.log('CAMBIANDO EL ESTADO DEL COMPONENTE');
    //     console.log('Mostrandor referencia al estado DOM:');
    //     console.log(miRef);
    // })

    /**
     * ? Caso 2: Ejecutar solo en algunos casos
     * cada vez que hay un cambio en contador 1 
     * se ejecuta lo que esté dentro de useEffect()
     */
    useEffect(() => {
        console.log('CAMBIANDO EL ESTADO DEL CONTADOR1');
        console.log('Mostrandor referencia al estado DOM:');
        console.log(miRef);
    },[contador1])

    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), y useEffect() ***</h1>
            <h2>CONTADOR 1 {contador1}</h2>
            <h2>CONTADOR 2 {contador2}</h2>

            {/**Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>

            {/**Botones para cambiar los contadores */}
            <button onClick={incrementar1}>Incrementar 1</button>
            <button onClick={incrementar2}>Incrementar 2</button>
        </div>
    );
}

export default Ejemplo2;
