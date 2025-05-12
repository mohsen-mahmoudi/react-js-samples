import React, { useEffect } from 'react'
import Table from '@/ui/Table'
import ClientRequest from '@/tools/ClientRequest'
import { Link } from 'react-router-dom'
import { DeleteOutlined, EditOutlined, EyeOutlined, LoadingOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { connect, useDispatch, useSelector } from 'react-redux' // 1 way (it is a high order component [like wrapper])
import { setPosts } from '@/redux/actions/posts';


export default function PostsList() {

    const dispatch = useDispatch()
    const posts = useSelector(state => {
        return state.posts
    })

    const columns = [
        { title: 'شناسه', key: 'id' },
        { title: 'نام', key: 'title' },
        {
            key: 'action',
            render: (el, r) => (<>
                <Link style={{ marginLeft: '10px' }} to={`/post/${r.id}`}><EyeOutlined /></Link>
                <Link style={{ marginLeft: '10px' }} to={`/post/${r.id}/edit`}><EditOutlined /></Link>
            </>)
        }
    ]

    useEffect(() => {
        ClientRequest('/posts')
            .then(({ data }) => dispatch(setPosts(data)))
    }, [])

    return (
        <Table data={posts} columns={columns} />
    )
}
