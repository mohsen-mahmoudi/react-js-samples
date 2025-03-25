import React, { Component } from "react";

export default class FragmentTest extends Component {

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
                <table border={1}>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((u, i) => {
                            return (
                                <tr key={u.id}>
                                    <Column u={u} />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

class Column extends Component {
    render() {
        const { u } = this.props
        // react.fragment just wrapp the object <></>
        return (
            <>
                <td>{u.name}</td>
                <td>{u.email}</td>
            </>
        )
        // this like upper return
        // return (
        //     <React.Fragment>
        //         <td>{u.name}</td>
        //         <td>{u.email}</td>
        //     </React.Fragment>
        // )
    }
}
