import React from 'react';

import "../css/ng-profile.css"
import avatar from "./avatarGhost.png"

export default class NGProfile extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="ng-profile" style={{visibility: (this.props.visible ? "visible" : "hidden")}}>
                <ul className="ng-prof-blocks">
                    <li> <div className="ng-avatar-block">
                        <ul className="personal-info">
                            <li><img src={avatar} className="avatar" /></li>
                            <li><p className="fullname"> {this.props.name} <br /> {this.props.surname}</p></li>
                            <li><p className="status"> &gt; {this.props.status}</p></li>
                        </ul>
                    </div>
                    </li>
                    <li> <div className="ng-prof-block"> <button className="menuBtn">&nbsp; &#9726; Main Page</button> </div> </li>
                    <li> <div className="ng-prof-block"> <button className="menuBtn">&nbsp; &#9726; Learn</button> </div> </li>
                    <li> <div className="ng-prof-block"> <button className="menuBtn">&nbsp; &#9726; Tests</button> </div> </li>
                    <li> <div className="ng-prof-block"> <button className="menuBtn">&nbsp; &#9726; Vocabulary</button> </div> </li>
                    <li> <div className="ng-prof-block"> <button className="menuBtn">&nbsp; &#9726; My Notes</button> </div> </li>
                    <li> <div className="ng-prof-block"> <button className="menuBtn">&nbsp; &#9726; Settings</button> </div> </li>
                </ul>
            </div>
        );
    }
}
