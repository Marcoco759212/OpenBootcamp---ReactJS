import React, {useState, useEffect} from 'react';
import '../../styles/figura.scss'

const Figura = () => {

    const [isChangeColor, setIsChangeColor] = useState(false);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('bucle de colores');
            setColor()
        }, 500)
        return () => {
            clearInterval(intervalID)
        };
    }, [isChangeColor]);

    const randomColor = () => {
        return(
            Math.floor(Math.random() * 255) + 1 
        ) 
    }

    const setColor = () => {
        if(isChangeColor){
            setRed(randomColor());
            setGreen(randomColor());
            setBlue(randomColor());
        }
    }

    const changeColor = () => {
        console.log(`${ !isChangeColor ? 'inicia' : 'se dteiene'} cambio de color`);
        setIsChangeColor(!isChangeColor)
    }

    const startChangeColor = () => {
        console.log('inicia cambio de color');
        setIsChangeColor(true)
    }

    const stopChangeColor = () => {
        console.log('se detiene cambio de color');
        setIsChangeColor(false)
    }

    const colorRGBCuadrado = {
        backgroundColor: `rgb( ${red}, ${green}, ${blue} )`
    }

    const colorRGBletras = {
        color: `rgb( ${blue}, ${red}, ${green} )`
    }

    return (
        <div>
            <h1 className='letras' 
                style={ red === 0 && 
                        green === 0 && 
                        blue === 0 ? 
                            null 
                        : 
                            colorRGBletras 
                        }>
                Cuadrado
            </h1>
            <p style={colorRGBCuadrado} 
                className='cuadrado'
                onMouseOver={startChangeColor}
                onMouseOut={stopChangeColor}
                onDoubleClickCapture={changeColor}>
            
            </p>
        </div>
    );
}

export default Figura;
