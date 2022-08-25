/* Crear un componente de tipo función y acceder a su estado
privado a través de un hook y poder modificarlo*/

import React, {useState} from 'react';

const Ejemplo1 = () => {

    // valor inicial para un contador
    const valorInicial = 0;

    //valor inicial para una persona
    const personaInicial = {
        nombre : 'pepe',
        email : 'pepe@pecas.com'
    }

    /**
     * Queremos que el VALOR INICIAL y PERONA INICAL  sean 
     * parte del estado del componente para gestionar su
     * cambio y que se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)
 
    /**
     * Actualiza el estado del contador
     */
    const incrementarContador = () => {
        setContador(contador + 1)
    }

    /**
     * Actualiza el estado del objeto persona
     */
    const actualizarPersona = () => {
        setPersona({
            nombre : 'Bartolo',
            email : 'bartolo@nospam.com'
        })
    }

    return (
        <div>
            <h1> ***Ejemplo de useState()*** </h1>
            <h2> CONTADOR: {contador} </h2>
            <h2> Datos de la persona </h2>
            <h3> Nombre: {persona.nombre} </h3>
            <h3> Email: {persona.email} </h3>
            {/**Bloque de botones para actualizar estados */}
            <button onClick={incrementarContador}> Incrementar contador </button>
            <button onClick={actualizarPersona}> Actualizar persona </button>
        </div>
    );
}

export default Ejemplo1;
