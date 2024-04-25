import React, { Component } from "react";
import '../App.css'

class Placar extends Component {
    render() {
        const { placar, onProximaPergunta } = this.props;

        return (
            <div>
                <h2>Resultados</h2>
                <h4> Seu placar: {placar}</h4>
            </div>
        );
    }
}

export default Placar;