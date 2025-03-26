import React, { Component, useEffect, useState } from "react";

// for mounting/unmounting component we use useEffect in function component
export default function UseEffectTest() {

    return (
        <ChildComponent />
    )

}

function ChildComponent() {
    console.log('1')
    //note) if we don't send second paramter means cDU per all changes!
    useEffect(() => {
        // this is equal to component did mount
        console.log('Mount')
    }, [])
    console.log('2')

    //for component did update we do this
    // we use specific per state props
    const [count, setCount] = useState(10)
    useEffect(() => {
        console.log('component didi update')
    }, [count])

    // component will unmount
    useEffect(()=>{
        return ()=> {
            console.log('component will umount')
        }
    },[])
    return (
        <div>
            {count}
            <button onClick={() => { setCount(count + 1) }}>+</button>
        </div>
    )

}