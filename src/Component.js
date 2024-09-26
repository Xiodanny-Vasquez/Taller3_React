//EJERCICIO 2

import React from "react";

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mensaje: <h1>Hola, has click en el boton</h1> };
    }
   
cambiarMensaje= () => {
    this.setState({ mensaje: <h1>el mensaje se ha cambiado exitosamente</h1>});
    };
    componentDidUpdate() {
        console.log("El componente se ha actualizado exitosamente");
    }
    componentWillUnmount() {
        console.log("El componente va a desaparecer ");
    }
    render() {
        return (
            <div>
                <p>{this.state.mensaje}</p>
                <button onClick={this.cambiarMensaje}>Cambiar Mensaje</button>
            </div>
        );
    }
}

export default Component;