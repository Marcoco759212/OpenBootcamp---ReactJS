/**
 * Ejemplo de uso de metodo componenteDidUpdate en componente
 * de clase y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

componentDidUpdate(){
    console.log('Comportamiento cuando el componente lleva nuevos props o cambios en su estado');
}

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {
    
    useEffect(() => {
        console.log('Comportamiento cuando el componente lleva nuevos props o cambios en su estado');
    });
    
    return(
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}

