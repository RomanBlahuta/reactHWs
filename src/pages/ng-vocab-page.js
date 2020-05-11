import React from 'react';

import "../css/ng-profile.css"
import "../css/ng-backgrounds.css"

import NGHeader from "../components/ng-header";

import profileW from "../components/img/profile_white.png"
import profileB from "../components/img/profile_black.png"
import NGProfile from "../components/ng-profile";
import NGContent from "../components/ng-content";
import NGFooter from "../components/ng-footer";

export default class NGVocabPage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            profClicked: true,
            profPic: profileW,
            bg: "linear-gradient(darkslateblue, #8536e2)",
            contentWidth: "70vw",
            vocab: (<div><span style={{fontSize: "4vh"}}>火 - Fire;</span><br />
        <span style={{fontSize: "4vh"}}>水 - Water;</span><br />
        <span style={{fontSize: "4vh"}}>土 - Earth;</span><br />
        <span style={{fontSize: "4vh"}}>風 - Wind;</span><br />
        <span style={{fontSize: "4vh"}}>雷 - Lightning;</span><br />
        <span style={{fontSize: "4vh"}}>日 - Day, Sun;</span><br />
        <span style={{fontSize: "4vh"}}>こんにちは - Good afternoon, Hello;</span><br /></div>)
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
                <NGHeader></NGHeader>
                <section className="bg-default"></section>
                <div><button style={{background: this.state.bg}} onClick={this.handleClick} className="prof"><img style={{width: "95%", height: "90%", margin:"0"}} src={this.state.profPic}/></button></div>
                <NGProfile name="Roman" surname="Blahuta" status="Slowly going insane..." visible={!this.state.profClicked ? true : false}></NGProfile>
                <NGContent left="15vw" width={this.state.contentWidth} height="89.4vh" contents={
                    <p className="main"><h1>Here is your current vocabulary! <br /></h1> <br />
                        {this.state.vocab}
                    </p>
                }>  </NGContent>
                <NGFooter></NGFooter>
            </div>
        );
    }
}
