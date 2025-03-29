import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'

export default function Article() {

    const theme = useContext(ThemeContext)

    return (
        <div className='content box' style={theme}>
            <h2>Article Page</h2>
            <ul>
                <li><Link to='/article/1'>Article 1</Link></li>
                <li><Link to='/article/2'>Article 2</Link></li>
            </ul>
        </div>
    )
}
