import React from 'react';

import NGHeader from "../components/ng-header";
import redBG from "./img/dawnJap.jpg";
import ngLogo from "../components/img/flowerlogo.png"
import "../css/ng-index.css"

import { Link } from 'react-router-dom';

// <section className="bg-alternative"></section>

export default class NGIndexPage extends React.Component {

    constructor(props){
        super(props);
        this.buttonText = props.name;
    }

    render() {
        return (
            <div>
                <div className="ng-index-header"><p>Nihon-GO</p><Link to="/login" ><button className="go" >START</button></Link> </div>
                <img src={ngLogo} className="ng-logo-centre"></img>
            </div>
        );
    }
}