import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class CreateRef extends Component {

    state = {
        show: false
    }

    myRef = React.createRef()

    toggle = () => {
        // use second params of setState for managing ref
        // not using componentDidUpdate
        this.setState(state => ({ show: !state.show }), () => {
            // if (this.myRef.current) {
            //     console.log(this.myRef)
            //     this.myRef.current.focus();
            // }

            // second way
            //this.myRef.current && this.myRef.current.focus()

            // third way (optional chaining)
            this.myRef.current?.focus()
        })
    }

    componentDidUpdate() {
        console.log('up',this.myRef)
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.toggle}>Search</button>
                {this.state.show && <input type="text" ref={this.myRef} />}
            </div>
        )
    }
}

