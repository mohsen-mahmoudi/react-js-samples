import React, { Component, PureComponent } from "react";

export default class PureComponentTest extends Component {

    state = {
        counter1: 0,
        counter2: 0
    }

    render() {
        return (
            <div>
                <span>Counter1: {this.state.counter1}</span>
                <button onClick={() => this.setState(state => ({ counter1: state.counter1 + 1 }))}>+</button>
                <br></br>
                <span>Counter2: {this.state.counter2}</span>
                <button onClick={() => this.setState(state => ({ counter2: state.counter2 + 1 }))}>+</button>

                <ChildNormalComponent counter={this.state.counter1}/>
                <ChildPureComponent counter={this.state.counter1}/>
            </div>
        )
    }
}

class ChildNormalComponent extends Component {
    componentDidUpdate() {
        console.log('ChildNormalComponent update')
    }

    shouldComponentUpdate(newProps, newState) {
        if(newProps.counter == this.props.counter) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>ChildNormalComponent : {this.props.counter}</div>
        )
    }
}

// at pure component we dont need to override shouldComponentUpdate
// note if we send new object per change it may changed!
class ChildPureComponent extends PureComponent {
    componentDidUpdate() {
        console.log('ChildPureComponent update')
    }

    render() {
        return (
            <div>ChildPureComponent : {this.props.counter}</div>
        )
    }
}
