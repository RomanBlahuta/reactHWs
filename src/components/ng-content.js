import React from 'react';

import "../css/ng-content.css"

export default class NGContent extends React.Component {

    constructor(props) {
        super();
        this.state = {
            height: props.height,
            width: props.width,
            top: props.top,
            left: props.left
        }
    }

    render() {
        return (
            <div className="ng-content" style={{height: this.state.height, width: this.state.width, left:this.state.left, top:this.state.top}}>
                {this.props.contents}
            </div>
        );
    }
}
