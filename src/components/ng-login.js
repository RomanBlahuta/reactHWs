import React from "react";
import "../css/ng-login.css";

export default class NGLogin extends React.Component {

    constructor(props) {
        super(props);
        this.buttonText = props.name;
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>

                    <label className="lgLabel"><br/>Email<br/></label>
                    <input type="text" name="password" className="ng-email"/>

                    <label className="lgLabel"><br/>Password<br/></label>
                    <input type="password" name="password" className="ng-password"/><br/><br/>

                    <button type="submit" className="submit-btn">
                        {this.buttonText}
                    </button>
                </form>
            </div>
        );
    }
}
