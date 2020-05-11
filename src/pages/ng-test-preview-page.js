import React from 'react';

import "../css/ng-test-preview.css"
import "../css/ng-links.css"

import NGHeader from "../components/ng-header";
import "../css/ng-backgrounds.css"

import profileW from "../components/img/profile_white.png"
import profileB from "../components/img/profile_black.png"
import NGProfile from "../components/ng-profile";
import NGContent from "../components/ng-content";
import NGFooter from "../components/ng-footer";
import { Link } from "react-router-dom";

export default class NGTestPreviewPage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            profClicked: true,
            profPic: profileW,
            bg: "linear-gradient(darkslateblue, #8536e2)",
            contentWidth: "50vw",
            name: props.name,
            subject: props.subject,
            goto: props.goto
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.profClicked) {
            this.setState(state => ({profClicked: !this.state.profClicked, profPic: profileB,  bg: "rgb(214, 182, 255)"}));
        }
        else {
            this.setState(state => ({profClicked: !this.state.profClicked, profPic: profileW, bg: "linear-gradient(darkslateblue, #8536e2)"}));
        }
    }

    render() {
        return (
            <div>
                <section className="bg-alternative"></section>
                <NGHeader></NGHeader>
                <div><button style={{background: this.state.bg}} onClick={this.handleClick} className="prof"><img style={{width: "95%", height: "90%", margin:"0"}} src={this.state.profPic}/></button></div>
                <NGProfile name="Roman" surname="Blahuta" status="Slowly going insane..." visible={!this.state.profClicked ? true : false}></NGProfile>
                <NGContent top="25vh" left="25vw" width={this.state.contentWidth} height="50vh" contents={
                    <p className="test-preview"><h1> Test: {this.state.name} <br /></h1> <br />
                        ✧   Let's test your knowledge of <a className="ng-link" href={this.state.goto} target="-_blank">{this.state.subject}</a>!   ✧<br />
                    <Link exact to="/home/test/quiz"><button className="start-btn">Start!</button></Link>
                    </p>
                }>  </NGContent>
                <NGFooter></NGFooter>
            </div>
        );
    }
}
