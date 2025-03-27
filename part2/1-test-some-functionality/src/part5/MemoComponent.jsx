import React, { useState } from 'react';

export default function MemoComponent() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    
    console.log('Parent', counter1, counter2);
     
    return (
        <div>
            <button onClick={() => setCounter1(c => c + 1)}>Change Counter1</button>
            <button onClick={() => setCounter2(c => c + 1)}>Change Counter2</button>
            <div>Counter1: {counter1}</div>
            <div>Counter2: {counter2}</div>
            <MyComponent counter={counter1} />
            <MyMemoComponent counter={counter1} />
        </div>
    );
}

function MyComponent({ counter }) {
    console.log('MyComponent', counter);
    return <div>MyComponent: {counter}</div>;
}

// Memoized version that only re-renders when its props change
const MyMemoComponent = React.memo(function({ counter }) {
    console.log('MyMemoComponent', counter);
    return <div>MyMemoComponent: {counter}</div>;
});