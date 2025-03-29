import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import useAuth from '../../hooks/useAuth'
import UserContext from '../../contexts/UserContext'
import useUser from '../../hooks/useUser'

export default function Home(props) {

    // using hooks
    const theme = useContext(ThemeContext)
    
    // two way is correct
    //const { isLoggedIn, user } = useContext(UserContext)
    const { isLoggedIn, user } = useUser()

    return (
        <div className='content box' style={theme}>
            <h2>Home Page</h2>
            <h4>{isLoggedIn && 'Hi, ' + user.name}</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ducimus
                commodi iure accusamus cumque explicabo corrupti laborum quia, doloribus magni autem laudantium
                aliquam illum facere consequatur consequuntur dolore delectus quos.
            </p>
        </div>
    )
}
