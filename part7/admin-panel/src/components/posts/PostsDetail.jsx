import React, { useEffect, useState } from 'react'
import ClientRequest from '@/tools/ClientRequest'
import { Link, useParams } from 'react-router-dom'
import { Divider } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '@/redux/actions/posts'

export default function PostsDetail() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const post = useSelector(state => {
        return state.post;
    })

    useEffect(() => {
        ClientRequest('/posts/' + id).then(({ data }) => dispatch(setPost(data)))
    }, [id])

    return (
        <div>
            <h2>title : {post.title}</h2>
            <p>body: {post.body}</p>
            <p style={{ direction: 'ltr' }}>json: {JSON.stringify(post)}</p>
            <Divider />
            <Link to='/posts'>بازگشت به لیست</Link>
        </div>
    )
}
