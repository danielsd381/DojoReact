import React, {Component} from 'react';
import ResultComponent from './Resultado/ResultComponent';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        // this.loadUsers();
        this.state = {
            results: []
        };
    }

    componentDidMount() {
        this.state = {
            results: []
        };
        let _this = this;
        fetch('https://api.mercadolibre.com/sites/MCO/search?q=audifonos').then(result => result.json()).then(result => {
            console.log("RESPONSE");
            console.log(result);
            _this.setState({results: result.results});
        }).catch(function(error) {
            console.error(error);
            return null;
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                {this.state.results.map(function(result, j) {
                    return (
                        <ComponenteResultado id={result.id} title={result.title} image={result.thumbnail}></ComponenteResultado>
                    );
                })}
            </div>
        );
    }
}

export default App;
