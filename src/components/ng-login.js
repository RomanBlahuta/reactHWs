import React from "react";
import "../css/ng-login.css";
import { Redirect } from "react-router-dom";

export default class NGLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fname: "",
            lname: ""
        }

        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleLogIn(event) {
        event.preventDefault();
        const inputs = event.target.getElementsByTagName("input");
        this.setState({
            email: inputs.email.value,
            password: inputs.password.value
        });

    }

    handleSignUp(event) {
        event.preventDefault();
        const inputs = event.target.getElementsByTagName("input");
        this.setState({
            email: inputs.email.value,
            password: inputs.password.value,
            fname: inputs.fname.value,
            lname: inputs.lname.value
        });

    }

    renderRedirect() {
        if (this.props.name == "Sign Up") {
            if (this.state.fname && this.state.lname && this.state.email && this.state.password) {
                alert(`Signed In as ${this.state.fname} ${this.state.lname}!\nEmail: ${this.state.email}\nPassword: ${this.state.password}`);
                return (<Redirect exact to="/home"></Redirect>)
            }
        }
        else {
            if (this.state.email && this.state.password) {
                alert(`Logged In!\nEmail: ${this.state.email}\nPassword: ${this.state.password}`);
                return (<Redirect exact to="/home"></Redirect>)
            }
        }
    }

    render() {
        if (this.props.name == "Log In") {
            return (
                <div className="Login">
                    <form onSubmit={this.handleLogIn}>

                        <label className="lgLabel"><br/>Email<br/></label>
                        <input type="text" name="email" className="ng-email"/>

                        <label className="lgLabel"><br/>Password<br/></label>
                        <input type="password" name="password" className="ng-password"/><br/><br/>

                        <button type="submit" className="submit-btn" formAction="/home" onSubmit={this.handleLogIn}>
                            {this.props.name}
                        </button>
                    </form>

                    {this.renderRedirect()}
                </div>
            );
        }
        else {
            return (
                <div className="Login">
                    <form onSubmit={this.handleSignUp}>

                        <label className="lgLabel"><br/>First Name<br/></label>
                        <input type="text" name="fname" className="ng-name"/>

                        <label className="lgLabel"><br/>Last Name<br/></label>
                        <input type="text" name="lname" className="ng-name"/>

                        <label className="lgLabel"><br/>Email<br/></label>
                        <input type="text" name="email" className="ng-email"/>

                        <label className="lgLabel"><br/>Password<br/></label>
                        <input type="password" name="password" className="ng-password"/><br/><br/>

                        <button type="submit" className="submit-btn" formAction="/home" onSubmit={this.handleSignUp}>
                            {this.props.name}
                        </button>
                    </form>

                    {this.renderRedirect()}
                </div>
            );
        }
    }
}
