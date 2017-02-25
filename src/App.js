import React, {Component} from 'react';
import ResultComponent from './ResultComponent';

//import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
        fetch('https://api.mercadolibre.com/sites/MCO/search?q=audifonos').then(response => {
            console.log(response);
            _this.setState({results: response.json().results});
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
                        <ResultComponent id={result.id} title={result.title} image={result.thumbnail}></ResultComponent>
                    );
                })}
            </div>
        );
    }

    // loadUsers() {
    //     let _this = this;
    //     axios.get('https://api.mercadolibre.com/sites/MCO/search?q=audifonos').then(function(response) {
    //         console.log(response);
    //         _this.setState({results: response.data.results});
    //     }).catch(function(error) {
    //         console.error(error);
    //         return null;
    //     })
    // }
}

export default App;
