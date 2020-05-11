import React from 'react';

import "../css/ng-header.css"
import flogo from "./img/flowerlogo.png"

export default class NGHeader extends React.Component {
    render() {
        return (
            <div>
            <div className="ng-header">
                Nihon<span style={{color: "red"}}>-</span>GO
            </div>

            <img src={flogo} style={{position:"absolute", top: "0.5vh", right: "0.5vh", width: "6vh", height: "6vh"}} />
            </div>
        );
    }
}
