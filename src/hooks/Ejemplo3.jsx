/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */

import React, {useState, useContext} from 'react';

/**
 * iniciamos un estado vacio qe se rellena con los datos
 * del padre
 */
const miContexto = React.createContext(null);

/**
 * Dispone de un contexto que va a tener un valor 
 * que recibe el padre
 * @returns Componente 1
 */
const Componente1 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    
    const state = useContext(miContexto);
    
    return (
        <div>
            <h2>La sesion es: {state.sesion}</h2>
        </div>
    );
}

const ComponeteContext = () => {
    
    const estadoInicial = {
        token: '12356',
        sesion: 1
    }

    /**
     * Sec crea el estado del componente
     */
    const [sesionData, setSeionData] = useState(estadoInicial);

    const actualizarSesion = () => {
        setSeionData({
            token: 'JWT122345',
            sesion: sesionData.sesion + 1
        })
    }
    
    return (
        <miContexto.Provider value={sesionData}>
            <h1>***Ejemplo de useState() y useContext()***</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Axtualizar sesion</button>
        </miContexto.Provider>
    );
}

export default ComponeteContext;


