import React, { Component, PureComponent } from "react";
import Form from "./CustomForm";
import { news } from "./NewsList";

export default class HOC extends Component {

    render() {
        return (
            <div>
                <Form permission="ROLE_VIEW_ALL">{['News Crud Form', news]}</Form>
            </div>
        )
    }
}
