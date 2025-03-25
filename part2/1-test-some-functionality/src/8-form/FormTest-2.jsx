import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class FormTest2 extends Component {

    state = {
        username: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    // for two way binding we need to handle onchange
    handleOnChanged = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    render() {
        return (
            <div>
                <span>form 2</span>
                <form onSubmit={this.handleSubmit}>
                    <span>username: </span>
                    <input type="text" value={this.state.username} name="username" onChange={this.handleOnChanged} />
                    <br />
                    <span>password: </span>
                    <input type="text" value={this.state.password} name="password" onChange={this.handleOnChanged} />
                    <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

