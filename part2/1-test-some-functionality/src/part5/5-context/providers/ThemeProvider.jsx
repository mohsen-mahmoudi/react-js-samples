import React, { useState } from 'react';
import ThemeContext, { themes } from '../contexts/ThemeContext';

export default function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(themes.dark)

    function changeTheme() {
        setTheme(theme => theme === themes.dark ? themes.light : themes.dark)
    }

    return (
        <div>
            <div>
                <button onClick={() => { changeTheme() }}>
                    {theme === themes.light ? 'Change Theme to Dark' : 'Change Theme to Light'}
                </button>
            </div>
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        </div>
    )
}
