import React, {Component} from 'react';
import Resultado from '../Resultado/Resultado';

class BusquedaPorCategoria extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
  }
  componentDidMount(){
    var categoria = this.props.categoria;
    console.log(categoria);
    
  }
      realizarPeticion(categoria) {
        // let _this = this;
        // fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + texto).then(result => result.json()).then(resultado => {
        //     _this.setState({resultados: resultado.results});
        // }).catch(function (error) {
        //     console.error(error);
        //     return null;
        // })
        var uri = "https://api.mercadolibre.com/sites/MCO/search?category="+categoria+"&official_store_id=all";
        fetch(uri)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson.results);
          this.setState({items: responseJson.results});
        })


    }

    cambioSelect(evento) {
        this.realizarPeticion(evento.target.value);
    }

  render() {
    return (
      <div>
        
        <div className="contenido">
        <h2 className="resultados">Resultados:</h2>
          {this.state.items.map(item => (
            <Resultado key={item.id} resultado={item} />))}
        </div>
      </div>
    );
  }
}

export default BusquedaPorCategoria;
