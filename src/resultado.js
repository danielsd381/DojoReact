import React, {Component} from 'react';

export  default class Resultado extends Component{
resultado = {};

  constructor(props){
    super(props);
    console.log(props.resultado);
    this.resultado  = props.resultado;
  }


render(){
  return(
          <div className='Item'>
            <div className='Titulo'>{this.resultado.title}</div>
            <div className='Imagen'><img  role = 'presentacion' src={this.resultado.thumbnail}/></div>
            <div className='Precio'>{this.resultado.price}</div>
            <div className="link"><a className="link" href={this.resultado.permalink}>Más información</a></div>
          </div>
      );
}
}
