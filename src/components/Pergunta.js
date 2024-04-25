import React, {Component} from "react";
import Opcoes from "./Opcoes";

class Pergunta extends Component{


    render() {
        const {pergunta, perguntaAtual, opcaoSelecionada, onTrocaOpcao, onEnviar } = this.props;
        return(
            <div className="">

                <h3> Pergunta {perguntaAtual}</h3>
                <h5 className="mt-2">{pergunta.question}</h5>
                <form onSubmit={onEnviar} className="mt-2 mb-2">
                    <Opcoes
                        opcoes={pergunta.options}
                        opcaoSelecionada={opcaoSelecionada}
                        onTrocaOpcao={onTrocaOpcao}
                    />
                    <button type="submit" className="btn btn-primary mt-2">ENVIAR</button>
                </form>
            </div>
        );
    }
}

export default Pergunta;