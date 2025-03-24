import { Component } from "react";

/* you should handle error just by class */
export default class ErrorHandler extends Component {

    // we can catch and handle error in this method 
    // error will not go upper than this comopnent
    componentDidCatch(error) {
        // all app will not crashed!
        console.log('error raised', error);
    }

    render() {
        return (
            <div>
                <ChildErrorHandler />
            </div>
        )
    }
}

// if compoenet crashed then all component to up will crashed and you see a white screen
// we want to handle error to crash just this component
class ChildErrorHandler extends Component {

    state = {
        count: 0
    }

    componentDidUpdate() {
        if(this.state.count  === 5) {
            throw new Error('App Crashed!')
        }
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>+</button>
            </div>
        )
    }
}
