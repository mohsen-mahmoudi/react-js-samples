import { Component } from "react";

export default class ListKeys extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(users => this.setState({ users })) 
    } 

    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map((u, index) => {
                        return <li key={u.id}>{index} {u.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

