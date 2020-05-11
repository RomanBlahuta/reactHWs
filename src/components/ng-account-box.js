import React from 'react';

import "../css/ng-account-box.css"
import NGLogin from "./ng-login";

export default class AccBox extends React.Component {

    constructor(props){
        super(props);

        this.subText = {
            "Log In": "Please Log In to access the app.",
            "Sign Up": "Please Sign Up to access the app."
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
                    <h2>{this.subText[this.props.name]}</h2>
                    <NGLogin name={this.props.name}></NGLogin>
                </div></li>

                <li><div className="delimeter-col"></div></li>
            </ul>
        );
    }
}
