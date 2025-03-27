import React, { useEffect, useRef } from 'react';

export default function UseRefTest() {
    const myInputRef = useRef();

    useEffect(() => {
        myInputRef.current.focus();
    }, []);

    return (
        <div>
            <input ref={myInputRef} />
        </div>
    );
}