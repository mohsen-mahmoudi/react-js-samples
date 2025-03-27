import React, { Component, useEffect, useReducer, useState } from "react";

const DEFAULT_VALUE = 5

function reducer(state, action = {}) {
    switch (action.type) {
        case 'ADD':
            return state + action.payload
        case 'SUB':
            return state - action.payload
        case 'RESET':
            return DEFAULT_VALUE
        default:
            return state
    }

}

export default function UseReducer() {

    const [count, dispatch] = useReducer(reducer, DEFAULT_VALUE)

    const add = payload => ({ type: 'ADD', payload })
    const remove = payload => ({ type: 'SUB', payload })
    const reset = payload => ({ type: 'RESET', payload })

    return <div>
        <span>Count : {count}</span>
        <button onClick={() => dispatch(add(1))}>+1</button>
        <button onClick={() => dispatch(add(2))}>+2</button>
        <button onClick={() => dispatch(remove(1))}>-1</button>
        <button onClick={() => dispatch(reset())}> Reset</button>
    </div>

}
