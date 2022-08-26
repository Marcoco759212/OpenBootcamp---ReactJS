import React, {useState} from 'react';

//definiendo estilos en constantes
const loggedStyle = {
    color: 'white'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    //generamos un estado para el componente
    //y asi controlar el usuario esta o no logeado
    const [logged, setLogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>

            { logged ? 
            (<p>Hola {props.name}</p>)
            :
            (<p>Please login</p>)}

            <button onClick={() => {
                console.log('Boton pulsado')
                setLogged(!logged)
            }}>
                {logged ? 'logout' : 'Login'}
            </button>
            
        </div>
    );
}

export default GreetingStyled;
