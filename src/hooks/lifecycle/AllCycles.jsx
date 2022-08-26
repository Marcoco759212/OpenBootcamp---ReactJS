import React, { useEffect } from 'react';

export const AllCycles = () => {

useEffect(() => {
    console.log('Componente creado');

    const intervalID = setInterval(() => {
        document.title = `${new Date()}`
        console.log('actualizacion del componente');
    }, 1000)

    return () => {
        console.log('Componente va a desaparecer');
        clearInterval(intervalID)
    };
}, []);

    return(
        <div>
            <h1>AllCycles</h1>
        </div>
    );
}