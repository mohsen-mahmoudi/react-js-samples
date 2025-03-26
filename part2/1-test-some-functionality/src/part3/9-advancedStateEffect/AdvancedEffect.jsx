import React, { Component, useEffect, useState } from "react";

//set interval problem
// closure programming is important
export default function AdvancedEffect() {

    const [count, setCount] = useState(1)

    useEffect(() => {
        setInterval(() => {
            console.log('salam', count)
            // has problem
            // setCount(count + 1)

            // resovle
            setCount(count=> count + 1)
        }, 1000)
    }, [])

    console.log(count)

    return <div>Count: {count}</div>

}
