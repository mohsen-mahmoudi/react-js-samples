import React, { useState } from 'react'
import Table from '@/ui/Table'
import ClientRequest from '@/tools/ClientRequest'

const columns = [
    // we remove dataindex in custom table wrapper 
    // { title: 'شناسه', dataIndex: 'id', key: 'id' },
    { title: 'شناسه', key: 'id' },
    { title: 'نام', key: 'name' },
    { title: 'آدرس', key: 'address', render: (el, r) => `${el.city} --- ${el.suite} --- ${r.phone}` },
]

export default function UsersList() {

    const [users, setUsers] = useState([])

    ClientRequest('/users')
        .then(({ data }) => setUsers(data))

    return (
        // we use custom table wrapper instead of ant table directly
        <Table data={users} columns={columns} />
        // <Table dataSource={users} columns={columns} /> 
    )
}
