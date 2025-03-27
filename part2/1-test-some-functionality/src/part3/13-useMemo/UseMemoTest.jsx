import React, { useEffect, useMemo, useState } from 'react';

export default function UseMemoTest() {
    const [mount, setMount] = useState(true);

    return (
        <div>
            <button onClick={() => setMount(m => !m)}>
                {mount ? 'Unmount' : 'Mount'}
            </button>
            {mount && <Child />}
        </div>
    );
}

function Child() {
    const [count, setCount] = useState(1);

    // we need to call this method per changes of our states
    function heavyProcess() {
        return (999999n ** 999999n).toString().length
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(c => c + 1);
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    //const value = heavyProcess()
    
    // this have a better performance
    //useMemo is a React Hook that memoizes (caches) the result of a 
    // computation to optimize performance by avoiding expensive recalculations on every render.
    const value = useMemo(() => {
        return heavyProcess()
    }, [])

    return <div>Count: {count} <hr /> Value: {value}</div>;
}