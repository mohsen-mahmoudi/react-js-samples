import React, { useEffect, useState } from 'react';

export default function UseCallback() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(c => c + 1);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const myInputRef = node => {
        console.log(node, count);
        node?.focus();
    };

    return (
        <div>
            <div>Count: {count}</div>
            <input ref={myInputRef} />
        </div>
    );
}