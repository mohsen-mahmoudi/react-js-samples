import React from 'react'

export default class CounterWithProp extends React.Component {

    state = {
        counter : this.props.defaultValue
    }

    static defaultProps = {
        defaultValue : -1
    }

    increase() {
        this.setState({ counter: this.state.counter + 1 })
    }
    decrease() {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <div>
                <span>{this.state.counter}</span>
                <button style={{ margin: '5px' }} onClick={() => {this.increase()}}>increase</button>
                <button onClick={() => {this.decrease()}}>decrease</button>
            </div>
        )
    }

}
