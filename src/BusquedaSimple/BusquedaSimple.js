import React, {Component} from 'react';
import ResultComponent from '../ResultComponent'

export default class ComponenteBusquedaSimple extends Component {
    constructor(props) {
        super(props);
        console.log("Búsqueda simple");
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        this.realizarPeticion('audifonos')
    }

    realizarPeticion(texto) {
        let _this = this;
        console.log("texto: ", texto);

        fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + texto).then(result => result.json()).then(result => {
            // console.log("Response: ", result);
            _this.setState({results: result.results});
        }).catch(function (error) {
            console.error(error);
            return null;
        })

    }

    cambioInput(evento) {
        this.realizarPeticion(evento.target.value);
    }

    render() {
        return (
            <div className="container">
                <input name="busqueda" id="input" type="text" placeholder="Ingresa la búsqueda"
                       onChange={this.cambioInput.bind(this)}></input>
                {this.state.results.map(function (resultado, indice) {
                    return (
                        <ResultComponent key={resultado.id} resultado={resultado}></ResultComponent>
                    );
                })
                }</div>
        );
    }
}
