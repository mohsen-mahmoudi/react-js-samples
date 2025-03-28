import React, { Component } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default class Header extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(theme) => (
                    <div className='box' style={theme}>
                        <h2>Header</h2>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    }
}
