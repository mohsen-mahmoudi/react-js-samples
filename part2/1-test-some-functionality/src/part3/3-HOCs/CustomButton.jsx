import React, { Component, PureComponent } from "react";
import { acl } from "./Users";

class Button extends Component {

    render() {
        return (
            <button {...this.props}>{this.props.children}</button>
        )
    }
}

const button = acl(Button)
export default button