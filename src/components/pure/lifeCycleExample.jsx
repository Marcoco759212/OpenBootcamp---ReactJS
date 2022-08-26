/**
 * Ejemplo de componente de tipo clase que dispone de
 * los métodos del ciclo de vida
 */
import React, { Component } from 'react'

class lifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuando se inicia un componente');
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes de que se inicie un componente');
    }

    componentDidMount(){
        console.log('DIDMOUNT: Se realiza el montaje justo antes de rendedrizarlo');
    }

    componentWillReceiveProps(nextProps){
        console.log('WILLEWCIVEPROPS: Si va a recibir props');
    }

    shouldComponentUpdate(nextProps, nextState){
        /**
         * controla si el componente debe oi no actualizarse
         */
    }

    componentDidUpdate(){
        console.log('WILLDIDUPDATE: Justo despues de actualizarse');
    }

    componentWillUnmount(){
        console.log('WILLUNMOUNT: Justo de desaparecer');
    }

  render() {
    return (
      <div>lifeCycleExample</div>
    )
  }
}
