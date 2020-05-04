import React from 'react';

import "../css/ng-account-box.css"
import NGLogin from "./ng-login";

export default class AccBox extends React.Component {

    constructor(props){
        super(props);
        this.buttonText = props.name;

        if (this.buttonText === "Log In") {
            this.subText = "Please Log In to access the app.";
        }
        else if (this.buttonText === "Sign Up") {
            this.subText = "Please Sign Up to access the app.";
        }
        else {
            this.subText = "ERROR";
        }

        this.state={
            username:'',
            password:''
        }
    }

    render() {
        return (
            <ul className="acc-box-container">
                <li><div className="acc-box">
                    <h1>Welcome to Nihon-Go!</h1>
                    <h2>{this.subText}</h2>
                    <NGLogin name={this.buttonText}></NGLogin>
                </div></li>

                <li><div className="delimeter-col"></div></li>
            </ul>
        );
    }
}
