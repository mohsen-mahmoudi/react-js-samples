import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import useUser from '../../hooks/useUser'

export default function Profile(props) {

    const theme = useContext(ThemeContext)

    const { user } = useUser()

    return (
        <div className='content box' style={theme}>
            <h2>Profile Page</h2>
            <h4>{'Hi, ' + user.name}</h4>
        </div>
    )
}
