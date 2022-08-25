import axios from "axios";
import React, {useState, useEffect} from "react";

export const ComponenteEstado = () => {

    const [partida, setPartida] = useState({
        usuario: 'Pepe',
        puntos: 0
    });

    useEffect(() => {
        console.log(`Actualizando con useEffect nombre de usuario: ${partida.usuario}`);
    },[partida]);

    const obtenerUsuario = () => {
        return axios.get('https://randomuser.me/api').then((resp) => {
            if(resp.status === 200){
                return resp.data.results[0].name.first
            }else{
                throw new Error('Error al obtener el usuario aleatorio')
            }
        }).catch((e) => console.error(`[Error] ${e}`))
    }

    const sumarPuntos = async () => {

        const usr = await obtenerUsuario();

        setPartida({
            usuario: usr,
            puntos: partida.puntos + 1
        })
    }

    return (
        <div>
            <h1>Hola, {partida.usuario}</h1>
            <h1> Puntuación: {partida.puntos} </h1>
            <button onClick={sumarPuntos}>Sumar puntos</button>
        </div>
    )
}