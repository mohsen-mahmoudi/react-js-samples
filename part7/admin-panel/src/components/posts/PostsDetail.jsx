import React, { useEffect, useState } from 'react'
import ClientRequest from '@/tools/ClientRequest'
import { Link, useParams } from 'react-router-dom'
import { Divider } from 'antd'

export default function PostsDetail() {

    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        ClientRequest('/users/' + id).then(({ data }) => setUser(data))
    }, [id])

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p style={{ direction: 'ltr' }}>{JSON.stringify(user)}</p>
            <Divider />
            <Link to='/users'>بازگشت به لیست</Link>
        </div>
    )
}
