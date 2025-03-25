import React, { Component, PureComponent } from "react";
import Button from "./CustomButton";
import { acl } from "./Users";

class Form extends Component {

    formTitle = this.props.children[0];
    formDataList = this.props.children[1];

    render() {
        return (
            <div>
                <p>{this.formTitle}</p>
                <p>News Count is {this.formDataList.length}</p>
                <Button permission="ROLE_ADD">Add</Button>
                <h2>List:</h2>
                <ul>
                    {this.formDataList.map(l => (
                        <li key={l.id}>
                            {l.title}
                            <Button permission="ROLE_EDIT">Edit</Button>
                            <Button permission="ROLE_REMOVE">Remove</Button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const form = acl(Form)
export default form