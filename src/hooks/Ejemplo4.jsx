/**
 * Ejemplo para entender el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>***Ejemplo de children PROPS***</h1>
            <h2>Nombre: {props.nombre}</h2>
            {/**Este props imprime todo el html que está 
            dentro de la etiqueta <Ejemplo4> declarada en App.js */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
