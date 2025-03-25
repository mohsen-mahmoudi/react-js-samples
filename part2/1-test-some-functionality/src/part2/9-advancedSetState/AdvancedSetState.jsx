import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class AdvancedSetState extends Component {

    state = {
        todots: [],
        count: 0
    }

    generateTodo = () => {
        const time = Date.now()
        return {
            id: time,
            title: `Todo: ${time}`
        }
    }

    addTodo = () => {
        const todo = this.generateTodo()
        this.setState({ todots: [...this.state.todots, todo] })
        //this.setState({ count: this.state.todots.length })
        // use callback function
        this.setState((state) => ({ count: state.todots.length }))
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.addTodo}>Add Todo</button>
                <br />
                <span>Todo Count: {this.state.count}</span>
                <ul>
                    {this.state.todots.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

