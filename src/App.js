import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pergunta from "./components/Pergunta";
import databasePerguntas from "./components/DatabasePerguntas";
import Placar from "./components/Placar";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const listaP = databasePerguntas;
    listaP.forEach(element => {
      element.options = this.embaralharArray(element.options);
    });


    this.state = {
      databasePerguntas: this.embaralharArray(databasePerguntas),
      perguntaAtual: 0,
      opcaoSelecionada: "",
      placar: 0,
      terminou: false
    }

  }

  embaralharArray = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

  }
  
  lidaComTrocaOpcao = (e) => {
    this.setState({opcaoSelecionada: e.target.value});
  };

  lidaComEnviar = (e) => {
    e.preventDefault();
    this.confereResposta();
    this.lidaComProximaPergunta();
  }

  confereResposta = () => {
    const { databasePerguntas, perguntaAtual, opcaoSelecionada, placar } = this.state;
    if(opcaoSelecionada === databasePerguntas[perguntaAtual].answer) {
      this.setState((estadoAnterior) => ({placar: estadoAnterior.placar + 1}));
    }
  }

  lidaComProximaPergunta = () => {
    // desestrutura o state?
    const { databasePerguntas, perguntaAtual } = this.state;
    if(perguntaAtual + 1 < databasePerguntas.length) {
      this.setState((estadoAnterior) => ({
        perguntaAtual: estadoAnterior.perguntaAtual + 1,
        opcaoSelecionada: "",
      }));
    } else {
      this.setState({
        terminou: true,
      });
    }
  };

  render() {
    
    const { databasePerguntas, perguntaAtual, opcaoSelecionada, placar, terminou } = this.state;

    return (
      <div className="App d-flex flex-column align-items-center justify-content-center">
        <h1 className="app-title"> PROVA DE FRONT END</h1>
        {!terminou ? (

          <Pergunta
            pergunta={databasePerguntas[perguntaAtual]}
            perguntaAtual={perguntaAtual + 1}
            opcaoSelecionada={opcaoSelecionada}
            onTrocaOpcao={this.lidaComTrocaOpcao}
            onEnviar={this.lidaComEnviar}
          />

          ) : (

            <Placar
              placar={placar}
              onProximaPergunta={this.lidaComProximaPergunta}
              className="placar"
            />

          )
        }
      </div>
    )
  }

}
export default App;
