import React from 'react';

import "../css/ng-profile.css"
import "../css/ng-backgrounds.css"

import NGHeader from "../components/ng-header";

import profileW from "../components/img/profile_white.png"
import profileB from "../components/img/profile_black.png"
import NGProfile from "../components/ng-profile";
import NGContent from "../components/ng-content";
import NGFooter from "../components/ng-footer";

import katakanaTable from "./img/katakana.png";
import hiraganaTable from "./img/hiragana.png";
import globalTable from "./img/global_table.png"

export default class NGLearnPage extends React.Component {

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
                    <p className="main">
                        <h1 style={{textAlign: "center", fontSize: "80px", fontFamily:['Kaushan Script', "cursive"]}}>✧✧ Let's Learn! ✧✧ </h1>

                        <h1>Hiragana: <br /></h1>
                        <strong>Hiragana</strong> are used for words without kanji representation, for words no longer written in kanji, and also following kanji to show conjugational endings. Because of the way verbs (and adjectives) in Japanese are conjugated, kanji alone cannot fully convey Japanese tense and mood, as kanji cannot be subject to variation when written without losing their meaning. For this reason, hiragana are appended to kanji to show verb and adjective conjugations. Hiragana used in this way are called okurigana. Hiragana can also be written in a superscript called furigana above or beside a kanji to show the proper reading. This is done to facilitate learning, as well as to clarify particularly old or obscure (or sometimes invented) readings.
                        <br /><br /><img className="kanatable" src={hiraganaTable} />
                        <h1>Katakana: <br /></h1>
                        <strong>Katakana</strong>, like hiragana, constitute a syllabary; katakana are primarily used to write foreign words, plant and animal names, and for emphasis. For example, "Australia" has been adapted as Ōsutoraria (オーストラリア), and "supermarket" has been adapted and shortened into sūpā (スーパー).
                        <br /><br /><img className="kanatable" src={katakanaTable} />
                        <h1>Kanji: <br /></h1>
                        <strong>Kanji (漢字, pronounced [kaɲdʑi])</strong> are the adopted logographic Chinese characters that are used in the Japanese writing system. They are used alongside the Japanese syllabic scripts hiragana and katakana. The Japanese term kanji for the Chinese characters literally means "Han characters". It is written with the same characters as in Traditional Chinese to refer to the character writing system, hanzi (漢字).
                        <h1>Combined table:</h1>
                        Hiragana and katakana table + some basic kanji.
                        <br /><br /><img className="kanatable" src={globalTable} />
                    </p>
                }>  </NGContent>
                <NGFooter></NGFooter>
            </div>
        );
    }
}
