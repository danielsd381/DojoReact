import React, {Component} from 'react';

export default class ResultComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {resultado: props.resultado};
    }


    render() {
        if (this.state.resultado.thumbnail && this.state.resultado.id && this.state.resultado.title) {
            return (
                <div className="panel panel-default">
                    <div className="row">
                        <div className="col-md-4"><img alt="Result" src={this.state.resultado.thumbnail}
                                                       className="img-thumbnail"></img></div>
                        <div className="col-md-8">
                            <h3 className="text-center">{this.state.resultado.title}</h3>
                            <p className="text-center">
                                {this.state.resultado.id} |
                                ${this.state.resultado.currency_id} {this.state.resultado.price} | <a
                                href={this.state.resultado.permalink}>Ir al producto</a>
                            </p>
                            <p className="text-center">
                                {this.state.resultado.address.city_name}, {this.state.resultado.address.state_name}
                            </p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}
