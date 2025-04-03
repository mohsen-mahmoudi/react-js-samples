import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AntdProvider from './AntdProvider'

export default function Providers({ children }) {
    return (
        <BrowserRouter>
            <AntdProvider>
                {children}
            </AntdProvider>
        </BrowserRouter>
    )
}
