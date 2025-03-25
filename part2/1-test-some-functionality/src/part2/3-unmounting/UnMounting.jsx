import { Component } from "react";

export default class UnMounting extends Component {

    constructor() {
        super()
    }

    state = {
        mount: true
    }

    render() {
        return (
            <div>
                <button onClick={() => {this.setState({mount: !this.state.mount})}}>
                    {this.state.mount ? 'UnMount' : 'Mount'}
                </button>
                {this.state.mount && <ChlidUnmount />}

                {/* for visibility for dont dispose component*/}
                <div style={{visibility: this.state.mount ? 'visible' : 'none'}}>
                    <ChlidUnmount/>
                </div>
            </div>
        ) 
    }
}

class ChlidUnmount extends Component {

    componentWillUnmount() {
        // this means object will be disposed
        console.log('unmounting...')
    }

    componentDidMount() {
        // new object from component has created
        console.log('mounting...')
    }

    render() {
        return <div>Child</div>
    }
}