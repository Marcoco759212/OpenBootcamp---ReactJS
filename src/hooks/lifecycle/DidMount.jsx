/**
 * Ejemlo de uso del método de ciclo de vida
 * en componente de clase y el hoock de ciclo 
 * de vida en ek componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea renderizado');
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea anadido');
    }, []);

    return(
        <div>
            <h1>DidMount</h1>
        </div>
    )
}