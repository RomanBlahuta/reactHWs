import React from 'react';

import AccBox from "../components/ng-account-box";
import NGLogoBR from "../components/ng-logoBR";
import helpIco from "../components/help.png"
import { Link } from "react-router-dom";

class NGLogINPageNavBar extends React.Component {

    constructor() {
        super();
    }

    //todo
    render() {
        return (
        <div className="nb-container">
            <ul className="login-navbar">
                <li><div><Link exact to="/signup"><button className="login-navbar-btn">Sign Up</button></Link></div></li>
                <li><div><Link exact to="/login"><button className="login-navbar-btn">Log In</button></Link></div></li>
                <li><div><Link exact to="/help"><button className="login-navbar-btn"><img src={helpIco} className="help-ico" /></button></Link></div></li>
            </ul>
        </div>
        )
    }
}


export default class NGLogINPage extends React.PureComponent {

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