import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import BusquedaPorCategoria from './BusquedaPorCategoria/BusquedaPorCategoria'
import './index.css';


  var categoria = 'MCO1574';
  ReactDOM.render(
    <BusquedaPorCategoria categoria={categoria}/>,
    document.getElementById('root')
  );
