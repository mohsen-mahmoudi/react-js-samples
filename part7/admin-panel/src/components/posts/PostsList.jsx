import React, { useEffect } from 'react'
import Table from '@/ui/Table'
import ClientRequest from '@/tools/ClientRequest'
import { Link } from 'react-router-dom'
import { DeleteOutlined, EditOutlined, EyeOutlined, LoadingOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { connect } from 'react-redux' // 1 way (it is a high order component [like wrapper])


function PostsList({posts, setPostsData}) {

    function getData() {
        ClientRequest('/posts')
            .then(({ data }) => setPostsData(data))
    }

    const columns = [
        { title: 'شناسه', key: 'id' },
        { title: 'نام', key: 'title' },
        {
            key: 'action',
            render: (el, r) => (<>
                <Link style={{ marginLeft: '10px' }} to={`/posts/${r.id}`}><EyeOutlined /></Link>
                <Link style={{ marginLeft: '10px' }} to={`/posts/${r.id}/edit`}><EditOutlined /></Link>
            </>)
        }
    ]

    useEffect(() => {
        getData();
    }, [])

    return (
        <Table data={posts} columns={columns} />
    )
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setPostsData: (data) => dispatch({ type: "posts-data", payload: data }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);