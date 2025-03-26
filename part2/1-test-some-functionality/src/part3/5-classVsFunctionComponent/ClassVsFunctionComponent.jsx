import React, { Component, useState } from "react";

// function compoenet file size has lower than class component
// lower size
// there is no instance in ram 
// better performance
export default function FunctionBaseComponent() {

    const [counter, setCounter] = useState(1)

    return (
        <div>
            Counter is {counter}
            <button onClick={() => { this.setCounter(counter + 1) }}>+</button>
        </div>
    )

}

// export default class ClassBaseComponent extends Component {

//     state = {
//         counter: 1
//     }

//     render() {
//         return (
//             <div>
//                 Counter is {this.state.counter}
//                 <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>+</button>
//             </div>
//         )
//     }
// }

