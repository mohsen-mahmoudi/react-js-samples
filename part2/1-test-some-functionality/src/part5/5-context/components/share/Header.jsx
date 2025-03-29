import React, { Component } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {

    const location = useLocation()

    return (
        <UserContext.Consumer>
            {({ user, login, isLoading, isLoggedIn, logout }) => (
                <ThemeContext.Consumer>
                    {theme => (
                        <div className='box header' style={theme}>
                            <div>
                                <h2>Header</h2>
                            </div>
                            <div>
                                {isLoading ?
                                    ('Loading...') :
                                    (isLoggedIn ?
                                        <span>
                                            {user.name}
                                            <span onClick={logout} className='logout'
                                                style={{ padding: '0.5em' }}>Logout</span>
                                        </span> :
                                        // <span onClick={login}>Login</span>
                                        <span><Link to='/login' state={{ from: location.pathname }}>Login</Link></span>
                                    )
                                }
                            </div>
                        </div>
                    )}
                </ThemeContext.Consumer>
            )}
        </UserContext.Consumer>
    )
}

