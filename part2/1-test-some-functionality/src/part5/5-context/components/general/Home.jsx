import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'

export default function Home(props) {

    // using hooks
    const theme = useContext(ThemeContext)

    return (
        <div className='content box' style={theme}>
            <h2>HomePage</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur ducimus
                commodi iure accusamus cumque explicabo corrupti laborum quia, doloribus magni autem laudantium
                aliquam illum facere consequatur consequuntur dolore delectus quos.
            </p>
        </div>
    )
}
