import React, { Component } from "react";

class Opcoes extends Component {
    render() {
        // desestrutura a this.props para passar atributos para o component
        const { opcoes, opcaoSelecionada, onTrocaOpcao } = this.props;

        return (
            <div className="options">
                {opcoes.map((opcao, index) => (
                    <div key={index} className="form-check">
                        <input
                            type="radio"
                            name="opcao"
                            value={opcao}
                            checked={opcaoSelecionada === opcao}
                            onChange={onTrocaOpcao}
                            className="form-check-input"
                        />
                        <label className="form-check-label">{opcao}</label>
                    </div>
                ))}
            </div>
        );
    }
}

export default Opcoes;