import React, { Component } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import UserContext from '../../contexts/UserContext'

export default class Header extends Component {
    render() {
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
                                                Hi, {user.name}
                                                <span onClick={logout} className='logout'>Logout</span>
                                            </span> :
                                            <span onClick={login}>Login</span>
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
}
