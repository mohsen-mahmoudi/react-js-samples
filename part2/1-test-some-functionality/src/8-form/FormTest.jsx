import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class FormTest extends Component {

    state = {
        username: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    // for two way binding we need to handle onchange
    usernameChanged = (event) => {
        this.setState({ username: event.target.value })
    }

    passwordChanged = (event) => {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div>
                <span>form 1</span>
                <form onSubmit={this.handleSubmit}>
                    <span>username: </span>
                    <input type="text" value={this.state.username} onChange={this.usernameChanged} />
                    <br />
                    <span>password: </span>
                    <input type="text" value={this.state.password} onChange={this.passwordChanged} />
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

