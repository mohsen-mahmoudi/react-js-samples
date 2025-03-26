import React, { Component, PureComponent } from "react";

export default class Stateless extends Component {

    state = {
        user: [{ id: 1, name: 'Ali' }, { id: 2, name: 'Mohsen' }]
    }

    render() {
        return (
            <div>
                {this.state.user.map(u=>(<User key={u.id} user={u}/>))}
            </div>
        )
    }
}

// this work like component but it has not any state and means it is stateless
// this idea is older than function components!
function User (prop) {
    return <div>{prop.user.name}</div>
}