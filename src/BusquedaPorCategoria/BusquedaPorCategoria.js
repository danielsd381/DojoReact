import React, {Component} from 'react';
import Resultado from '../Resultado/Resultado';

class BusquedaPorCategoria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categorias: [],
      categoria: ''
    };

  }


   componentDidMount() {
      this.state = {
          categorias: []
      };
      let _this = this;
      fetch('https://api.mercadolibre.com/sites/MCO/categories')
      .then((response) => response.json())
      .then((responseJson) => {
            this.setState({categorias: responseJson});
      }).catch(function(error) {
          console.log(error);
          return null;
      })
      //this.realizarPeticion('MCO40433');
    }
    realizarPeticion(categoria) {
      this.setState({categoria: categoria});
      var uri = "https://api.mercadolibre.com/sites/MCO/search?category="+categoria+"&official_store_id=all";
      fetch(uri)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({items: responseJson.results});
      })


    }

    cambioSelect(evento) {
        this.realizarPeticion(evento.target.value);
    }

  render() {
    return (
      <div>
        
        
          <select value={this.state.categoria} onChange={this.cambioSelect.bind(this)}>
            {this.state.categorias.map(categoria => <option value={categoria.id}>{categoria.name}</option>)}
          </select>
          <div className="contenido">
            
              {
                console.log(this.state.items.length)
              }
              {
              this.state.items.map(item => (
              <Resultado key={item.id} resultado={item} />)
              )}  
        </div>
      </div>
    );
  }
}

export default BusquedaPorCategoria;



