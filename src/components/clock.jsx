import React, { useState, useEffect } from 'react';

export const Clock = (props) => {

     const defaultPersona = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
     }

     const [persona, setPersona] = useState(defaultPersona);

     const tick = (props) => {
        setPersona({
            edad: persona.edad + 1 ,
            nombre: props.nombre,
            apellidos: props.apellidos,
            fecha: new Date()
        })
     }

     useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('Ejecucion componentDidMount');
            tick(props)
        }, 1000)

        return () => {
            console.log('Ejecucion componentWillUnmount');
            clearInterval(intervalID)
        };
     }, []);

     

    return (
        <div>
            <h2>
                Hora Actual:
                {persona.fecha.toLocaleTimeString()}
            </h2>
            <h3>{persona.nombre} {persona.apellidos}</h3>
            <h1>Edad: {persona.edad}</h1>
        </div>
    );
    
}

