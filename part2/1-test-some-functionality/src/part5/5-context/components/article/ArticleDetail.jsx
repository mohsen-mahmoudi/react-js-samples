import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import { Link, useParams } from 'react-router-dom'

export default function ArticleDetail() {

    const theme = useContext(ThemeContext)

    const { id } = useParams()

    return (
        <div className='content box' style={theme}>
            <h2>Article Detail Page</h2>
            <p>
                You can see Article of Id = {id}
            </p>
            <hr />
            <Link to='/article/'>Back To Article List</Link>
        </div>
    )
}
