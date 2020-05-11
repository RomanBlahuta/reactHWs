import React from 'react';

import "../css/ng-profile.css"
import "../css/ng-backgrounds.css"
import "../css/ng-test-catalog.css"

import NGHeader from "../components/ng-header";

import profileW from "../components/img/profile_white.png"
import profileB from "../components/img/profile_black.png"
import NGProfile from "../components/ng-profile";
import NGContent from "../components/ng-content";
import NGFooter from "../components/ng-footer";
import { Link } from "react-router-dom";

export default class NGTestCatalogPage extends React.Component {

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
                <section className="bg-default"></section>
                <div><button style={{background: this.state.bg}} onClick={this.handleClick} className="prof"><img style={{width: "95%", height: "90%", margin:"0"}} src={this.state.profPic}/></button></div>
                <NGProfile name="Roman" surname="Blahuta" status="Slowly going insane..." visible={!this.state.profClicked ? true : false}></NGProfile>
                <NGContent left="15vw" width={this.state.contentWidth} height="89.4vh" contents={
                    <p className="main" style={{textAlign: "center"}}>
                        <h1 style={{fontSize: "3.5vw", fontFamily:['Kaushan Script', "cursive"]}}>✧✧ Check your knowledge! ✧✧ </h1>
                        <h1>Hiragana Tests:</h1>
                        Check your knowledge of hiragana with our three-part test program!
                        <ul className="tests-h">
                            <li><Link exact to="/home/test/preview"><button className="catalog-test-option">Hiragana #1</button></Link></li>
                            <li><Link exact to="/home/test/preview"><button className="catalog-test-option">Hiragana #2</button></Link></li>
                            <li><Link exact to="/home/test/preview"><button className="catalog-test-option">Hiragana #3</button></Link></li><br />
                        </ul>
                        <br /><h1>Katakana Tests:</h1>
                        Check your knowledge of katakana with our three-part test program!
                        <ul className="tests-k">
                            <li><Link exact to="/home/test/preview"><button className="catalog-test-option">Katakana #1</button></Link></li>
                            <li><Link exact to="/home/test/preview"><button className="catalog-test-option">Katakana #2</button></Link></li>
                            <li><Link exact to="/home/test/preview"><button className="catalog-test-option">Katakana #3</button></Link></li><br />
                        </ul>
                        <br /><h1>Kanji Tests:</h1>
                        Check your knowledge of kanji with our three-part test program!
                        <ul className="tests-kj">
                            <li><Link exact to="/home/test/preview"><button className="catalog-test-option">Kanji #1</button></Link></li>
                            <li><Link exact to="/home/test/preview"><button className="catalog-test-option">Kanji #2</button></Link></li>
                            <li><Link exact to="/home/test/preview"><button className="catalog-test-option">Kanji #3</button></Link></li><br />
                        </ul>
                        <br /><br /><br /><br />
                    </p>
                }>  </NGContent>
                <NGFooter></NGFooter>
            </div>
        );
    }
}
