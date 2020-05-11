import React from 'react';
import NGContent from "../components/ng-content";
import NGHeader from "../components/ng-header";
import NGFooter from "../components/ng-footer";
import "../css/ng-help.css"
import {Link} from "react-router-dom";
import backW from "./img/back_white.png";
import backB from "./img/back_black.png";

export default class NGHelpPage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            profClicked: true,
            profPic: backW,
            bg: "linear-gradient(darkslateblue, #8536e2)",
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.profClicked) {
            this.setState(state => ({profClicked: !this.state.profClicked, profPic: backB,  bg: "rgb(214, 182, 255)"}));
        }
        else {
            this.setState(state => ({profClicked: !this.state.profClicked, profPic: backW, bg: "linear-gradient(darkslateblue, #8536e2)"}));
        }
        //console.log(this.state);
    }

    passwordReset() {
        alert("Message sent!\nGo reset your password!")
    }

    render() {
        return (
            <div>
                <NGHeader></NGHeader>
                <div><Link to="/login"><button style={{background: this.state.bg}} onClick={this.handleClick} className="prof"><img style={{width: "95%", height: "90%", margin:"0"}} src={this.state.profPic}/></button></Link></div>
                <NGContent left="10vw" width="80vw" height="89.4vh" contents={
                    <div>
                        <h1 style={{textAlign: "center", fontSize: "60px"}}> HELP PAGE </h1>
                        <h1 style={{textAlign: "center", fontSize: "47px"}}> Some of the Possible Problems </h1>

                        <h1 style={{marginLeft: "1%"}}>Forgot your password?</h1>
                        <p style={{marginLeft: "1%", fontSize: "30px"}}> Press <button className="in-text-btn" onClick={this.passwordReset}>here</button> to receive a letter with password reset on your account's email.<br />
                        Then, go to the email of the account you are trying to restore and follow the actions described in the letter.</p>

                        <h1 style={{marginLeft: "1%"}}>Encountered a bug?</h1>
                        <p style={{marginLeft: "1%", fontSize: "30px"}}>Please report what you saw to <span style={{color: "blue", cursor: "pointer"}}>nihon.go.dev@gmail.com</span>. <br />We will make sure to provide our customers with the best user experience possible.</p>

                        <h1 style={{marginLeft: "1%"}}>Have some other problems?</h1>
                        <p style={{marginLeft: "1%", fontSize: "30px"}}>Please report your issues to <span style={{color: "blue", cursor: "pointer"}}>nihon.go.help@gmail.com</span>. <br />Our team will try to help you as soon as possible!</p>

                        <h1 style={{marginTop:"10%", textAlign: "center", fontSize: "40px"}}> Thank you for your support and patience! </h1>
                    </div>
                }></NGContent>
                <NGFooter></NGFooter>
            </div>
        );
    }
}