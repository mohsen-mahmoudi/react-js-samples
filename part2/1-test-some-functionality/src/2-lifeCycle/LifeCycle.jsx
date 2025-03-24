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
        console.log('third - component rendred and set to the main DOM')
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({user: json})
            })

    }

    shouldComponentUpdate(props, state) {
        console.log('called when rerender needed to run ', state, this.state)
        // we can stop rerender with this method
        return true;
    }

    componentDidUpdate() {
        console.log('fourth - component updated')
    }

    UNSAFE_componentWillMount() {
        // dont use this methods
    }

    render() {
        console.log('second - and recall after any changes')
        return (
            <div>Wellcome: {this.state.user.name}</div>
        )
    }
} 