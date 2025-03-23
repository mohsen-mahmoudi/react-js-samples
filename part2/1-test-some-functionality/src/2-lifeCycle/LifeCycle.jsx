import { Component } from "react";

export default class LifeCycle extends Component {

    constructor() {
        super()
        console.log('first')
    }

    state = {
        user: {}
    }

    componentDidMount() {
        console.log('component rendred and set to the main DOM')
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({user: json})
            })

    } 

    render() {
        console.log('second')
        return (
            <div>Wellcome: {this.state.user.name}</div>
        )
    }
} 