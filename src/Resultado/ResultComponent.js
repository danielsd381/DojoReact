import React, {Component} from 'react';

export default class ComponenteResultado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: {}
        };
    }


    render() {
        const {image, id, title} = this.props;
        if (image && id && title) {
            return (
                <div className="panel panel-default">
                    <div className="row">
                        <div className="col-md-4">
                            <img alt="Result" src={image} className="img-thumbnail"></img>
                        </div>
                        <div className="col-md-8">
                            <h2 className="text-center">{title}</h2>
                            <p className="text-center">{id}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}
