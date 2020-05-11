import React from 'react';

import "../css/ng-logo.css"
import ngLogo from "./img/flowerlogo.png"

export default class NGLogoBR extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <img src={ngLogo} className="ng-logo"></img>
        );
    }
}
