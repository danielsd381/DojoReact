import React, {Component} from 'react';
import './App.css';

class App extends Component {
    quien = 'mundo';
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hola {this.quien}!</h1>
        );
    }
}

export default App;
