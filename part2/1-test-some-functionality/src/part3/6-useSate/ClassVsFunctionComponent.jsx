import React, { Component, useState } from "react";

// useState is hook
// there is no limitation
export default function UseSateFunctionComponent() {

    const state = useState(1)

    // pre change of state, component will be rerendered
    //console.log(state)
    return (
        <div>
            State is {state[0]}
            <button onClick={() => { state[1](state[0] + 1) }}>+</button>
        </div>
    )

}
