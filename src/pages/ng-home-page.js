import React from 'react';

import "../css/ng-test-preview.css"

import NGHeader from "../components/ng-header";

import profileW from "../components/profile_white.png"
import profileB from "../components/profile_black.png"
import NGProfile from "../components/ng-profile";
import NGContent from "../components/ng-content";
import NGFooter from "../components/ng-footer";

export default class NGHomePage extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            profClicked: true,
            profPic: profileW,
            bg: "linear-gradient(darkslateblue, #8536e2)",
            contentWidth: "70vw"
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
                <div><button style={{background: this.state.bg}} onClick={this.handleClick} className="prof"><img style={{width: "95%", height: "90%", margin:"0"}} src={this.state.profPic}/></button></div>
            <NGProfile name="Roman" surname="Blahuta" status="Slowly going insane..." visible={!this.state.profClicked ? true : false}></NGProfile>
                <NGContent left="15vw" width={this.state.contentWidth} height="89.4vh" contents={
                    <p className="main"><h1>Here will be some content! <br /><br /> Example:</h1> <br />
                    Here are some basic kanji:<br />
                    <span style={{color: "red", fontSize: "10vh"}}>火 - Fire</span><br />
                    <span style={{color: "blue", fontSize: "10vh"}}>水 - Water</span><br />
                    <span style={{color: "brown", fontSize: "10vh"}}>土 - Earth</span><br />
                    <span style={{color: "lime", fontSize: "10vh"}}>風 - Wind</span><br />
                    <span style={{color: "gold", fontSize: "10vh"}}>雷 - Lightning</span><br />
                    </p>
                }>  </NGContent>
                <NGFooter></NGFooter>
            </div>
        );
    }
}
