import React, { Component, useEffect, useState } from "react";

// for mounting/unmounting component we use useEffect in function component
export default function AbortRequest() {

    const [mount, setMount] = useState(true)

    return (
        <div>
            <span>abort request when unmounting is called</span>
            <button onClick={()=> {setMount(false)}}>+</button>
            <button onClick={()=> {setMount(true)}}>-</button>
            {mount && <ChildComponent />}
        </div>
    )

}

function ChildComponent() {

    const [users, setUser] = useState([])

    // component will unmount
    useEffect(() => {
        const abortRequest = new AbortController()
        fetch('https://jsonplaceholder.typicode.com/users', {
            signal: abortRequest.signal
        })
            .then(response => response.json())
            .then(json => { setUser(json) })

            // this is cleanup function
        return () => {
            console.log('unmounting and cancle request')
            abortRequest.abort()
        }
    }, [])

    return (
        <div>
            <ul>
                {users.map(u => (<li key={u.id}>{u.email}</li>))}
            </ul>
        </div>
    )

}