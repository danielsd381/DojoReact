import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BusquedaPorCategoria from './BusquedaPorCategoria'
import './index.css';

const element = (
  <div>
    <div className="header">
    </div>
    <BusquedaPorCategoria />
  </div>
);
ReactDOM.render(
  element,
  document.getElementById('root')
);
