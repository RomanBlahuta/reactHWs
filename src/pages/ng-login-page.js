import React from 'react';

import AccBox from "../components/ng-account-box";
import NGLogoBR from "../components/ng-logoBR";
import helpIco from "../components/help.png"

class NGLogINPageNavBar extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
        <div className="nb-container">
            <ul className="login-navbar">
                <li><div><button className="login-navbar-btn">Sign Up</button></div></li>
                <li><div><button className="login-navbar-btn">Log In</button></div></li>
                <li><div><button className="login-navbar-btn"><img src={helpIco} className="help-ico" /></button></div></li>
            </ul>
        </div>
        )
    }
}


export default class NGLogINPage extends React.Component {

    constructor(props){
        super(props);
        this.buttonText = props.name;
    }

    render() {
        return (
            <div>
                <AccBox name={this.buttonText}></AccBox>
                <NGLogoBR></NGLogoBR>
                <NGLogINPageNavBar></NGLogINPageNavBar>
            </div>
        );
    }
}