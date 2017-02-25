import React, {Component} from 'react';
import ResultComponent from '../ResultComponent'

export default class ComponenteBusquedaSimple extends Component {
    constructor(props) {
        super(props);
        console.log("Búsqueda simple")
        this.state = {
            query: "audifonos",
            results: []
        };
    }

    componentDidMount() {
        let _this = this;
        fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + this.state.query).then(result => result.json()).then(result => {
            console.log("RESPONSE");
            console.log(result);
            _this.setState({query: this.state.query, results: result.results});
        }).catch(function(error) {
            console.error(error);
            return null;
        })
    }

    cambioInput(evento) {
      self.setState({
        query: evento.target.value,
        results: self.state.results
      })
    }

    render() {
        return (
            <div className="container">
                <input name="busqueda" id="input" type="text" placeholder="Ingresa la búsqueda" onChange={this.cambioInput}></input>
                {this.state.results.map(function(result, j) {
                    return (
                        <ResultComponent id={result.id} title={result.title} image={result.thumbnail}></ResultComponent>
                    );
                })
}</div>
        );
    }
}
