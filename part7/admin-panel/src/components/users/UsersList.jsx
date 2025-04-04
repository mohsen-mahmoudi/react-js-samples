import React, { useEffect, useState } from 'react'
import Table from '@/ui/Table'
import ClientRequest from '@/tools/ClientRequest'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteOutlined, EditOutlined, EyeOutlined, LoadingOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';



export default function UsersList() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const onDeleteConfirm = (id) => {
        setLoading(true)
        ClientRequest.delete('/users/' + id)
            .finally(() => {
                getData();
                setLoading(false)
            })
    }

    function getData() {
        setLoading(true)
        ClientRequest('/users')
            .then(({ data }) => setUsers(data))
            .finally(() => {
                setLoading(false)
            });
    }
    
    const columns = [
        // we remove dataindex in custom table wrapper 
        // { title: 'شناسه', dataIndex: 'id', key: 'id' },
        { title: 'شناسه', key: 'id' },
        { title: 'نام', key: 'name' },
        { title: 'آدرس', key: 'address', render: (el, r) => `${el.city} --- ${el.suite} --- ${r.phone}` },
        {
            key: 'action',
            render: (el, r) => (<>
                <Link style={{ marginLeft: '10px' }} to={`/users/${r.id}`}><EyeOutlined /></Link>
                <Link style={{ marginLeft: '10px' }} to={`/users/${r.id}/edit`}><EditOutlined /></Link>
                <Popconfirm title="ایا مطمان هستید" description="رکورد پاک خواهد شد" onConfirm={() => onDeleteConfirm(r.id)}>
                    {loading ? <LoadingOutlined /> : <DeleteOutlined />}
                </Popconfirm>
            </>)
        }
    ]

    useEffect(() => {
        // error
        // ClientRequest('/users/error')
        // normal call
        getData();
    }, [])

    return (
        // we use custom table wrapper instead of ant table directly
        <Table data={users} columns={columns} loading={loading} />
        // <Table dataSource={users} columns={columns} /> 
    )
}
