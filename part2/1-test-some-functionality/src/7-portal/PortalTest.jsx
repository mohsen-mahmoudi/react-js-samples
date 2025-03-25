import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class PortalTest extends Component {

    state = {
        counter: 0
    }

    componentDidMount() {
        setInterval(()=> {this.setState({counter: this.state.counter + 1})}, 2000)
    }

    render() {
        return ReactDOM.createPortal(
            <div>
                {this.state.counter}
            </div>
        , document.getElementById("portal"))
    }
}

