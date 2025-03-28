import React, { useState } from 'react';

const Heavy = React.lazy(() => import('./Heavy'));

export default function LoadHeavyJS() {
    const [mount, setMount] = useState(false);
    return (
        <div>
            <button onClick={() => setMount(m => !m)}>
                {mount ? 'Unmount' : 'Mount'}
            </button>
            {mount && <LazyMode />}
        </div>
    );
}

function LazyMode() {
    return (
        <div>
            Main
            <React.Suspense fallback={<div>Loading ....</div>}>
                <Heavy />
            </React.Suspense>
        </div>
    );
}
