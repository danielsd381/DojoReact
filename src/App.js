import React, {Component} from 'react';
import Resultado from './Resultado/Resultado';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        // this.loadUsers();
        this.state = {
            results: []
        };
    }

    render() {
        console.log(this.state);
        return (
            <div></div>
        );
    }
}

export default App;
