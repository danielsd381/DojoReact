import React, {Component} from 'react';
import './App.css';
import Resultado from './resultado';

class App extends Component {


  constructor(props){
    super(props);
    this.buscar('audifonos');
    this.state ={
      resultados: []
    }
  }
    cambioInput(elemento){
      console.log('Valor: ', elemento.target.value);

    }

buscar(busqueda){
    //peticion ajax
      fetch('https://api.mercadolibre.com/sites/MCO/search?q='+ busqueda)
      .then((resultado) => resultado.json()).then((json) =>{
        this.setState({
          resultados: json.results
        })
      })
}




    render() {
        return (

          <div>
          <h1>Daniel Sierra DEttorre</h1>
            <input type='text' placeholder='Busqueda' onChange={this.cambioInput.bind(this)}></input>
            {this.state.resultados.map(function (resultado){
              return <Resultado resultado={resultado}></Resultado>
            })}
          </div>
        );
    }
}

export default App;
