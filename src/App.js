import React, {Component} from 'react';
import img1 from './img/avatar1.2.png'
import img2 from './img/avatar1.1.png'
import img3 from './img/avatar1.3.png'

class Membro extends Component {
  render(){
    return(
      <div className="col-sm">
        <img className="imgMembro" src={this.props.img} alt="avatar do membro"/>
        <div className="sobre">
        <h1 className="nomeMembro">{this.props.nome}</h1>
        <h2 className="cargoMembro">{this.props.cargo}</h2>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="containerEquipe">
      <h1 className="tituloEquipe">Nossa Equipe</h1>
      <div className="container">
          <div className="row">
          <Membro nome="Maria Julia" cargo="Diretora" img={img1}/>
          <Membro nome="Luis Henrique" cargo="Programador" img={img2}/>
          <Membro nome="Henry Jhonson" cargo="Designer" img={img3}/>
        </div>
      </div>
    </div>
  );
}

export default App;
