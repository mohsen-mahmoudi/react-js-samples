import React, { Component, useEffect, useState } from "react";

// Hooks can only be called inside of the body of a function component.
// because hooks are stored in array variable, when compoenet is created
export default function HookRules() {

    const [count, setCount] = useState('')

    if(count % 2) {
        // don't do, bad practice
        const [test, setTest] = useState('')
    }

    useEffect(()=>{
        // don't do, bad practice
        const [test2, setTest2] = useState('')
    }, [])

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        // don't do, bad practice
        const [test3, setTest3] = useState('')
    }

    return <div>Count: {count}</div>

}
