import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AntdProvider from './AntdProvider'
import ReduxProvider from './ReduxProvider'

export default function Providers({ children }) {
    return (
        <BrowserRouter>
            <AntdProvider>
                <ReduxProvider>
                    {children}
                </ReduxProvider>
            </AntdProvider>
        </BrowserRouter>
    )
}
