import React from 'react';

import "../css/ng-test-preview.css"
import "../css/ng-question.css"
import "../css/ng-backgrounds.css"

import NGHeader from "../components/ng-header";

import homeW from "../components/img/home_white.png"
import homeB from "../components/img/home_black.png"
import NGProfile from "../components/ng-profile";
import NGContent from "../components/ng-content";
import NGFooter from "../components/ng-footer";
import {Link, Redirect} from "react-router-dom";

export default class NGTestQuestionPage extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            qnum: 1,
            profClicked: true,
            profPic: homeW,
            bg: "linear-gradient(darkslateblue, #8536e2)",
            contentWidth: "60vw",
            name: props.name,
            maxqnum: props.maxqnum,
            question: props.questions,  //str
            options: props.options      //object
        }

        this.handleClick = this.handleClick.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    handleClick() {
        if (this.state.profClicked) {
            this.setState(state => ({profClicked: !this.state.profClicked, profPic: homeB,  bg: "rgb(214, 182, 255)"}));
        }
        else {
            this.setState(state => ({profClicked: !this.state.profClicked, profPic: homeW, bg: "linear-gradient(darkslateblue, #8536e2)"}));
        }
        //console.log(this.state);
    }

    nextQuestion() {
        this.setState((state) => {return {qnum: state.qnum + 1}});
        alert("Good Choice!")
        //console.log(this.state);
    }

    render() {
        if (this.state.qnum <= this.state.maxqnum)
        return (
            <div>
                <NGHeader></NGHeader>
                <section className="bg-alternative"></section>
                <div><Link to="/home"><button style={{background: this.state.bg}} onClick={this.handleClick} className="prof"><img style={{width: "95%", height: "90%", margin:"0"}} src={this.state.profPic}/></button></Link></div>
                <NGContent top="20vh" left="20vw" width={this.state.contentWidth} height="60vh" contents={
                    <div className="ng-content-container">
                    <p className="test-preview"><h1> Question #{this.state.qnum} <br /></h1> <br />
                        {this.state.question[this.state.qnum-1]}
                    </p>

                    <ul className="options">
                    <li><button className="option" onClick={this.nextQuestion}>A</button></li>
                    <li><button className="option" onClick={this.nextQuestion}>B</button></li>
                    <li><button className="option" onClick={this.nextQuestion}>C</button></li>
                    </ul>
                    </div>
                }> </NGContent>
                <NGFooter></NGFooter>
            </div>
        );
        else {
            alert("Well done!\n(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧")
            return (
                <Redirect exact to="/home/test"></Redirect>
            );
        }
    }
}
