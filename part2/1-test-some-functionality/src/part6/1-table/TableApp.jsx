import React, { useEffect, useState } from 'react'
import Table from './Table'

const columns = [
  { title: 'Id', dataIndex: 'id' },
  { title: 'Name', dataIndex: 'name' },
  { title: 'Email', dataIndex: 'email' },
  {
    title: 'Address', dataIndex: 'address',
    render: (row) => {
      return `${row.address.city}-${row.address.suite}-${row.phone}`
    }
  },
  { title: 'Phone', dataIndex: 'phone' },
]

const commentsColumns = [
  { title: 'Id', dataIndex: 'id' },
  { title: 'name', dataIndex: 'name' },
  { title: 'body', dataIndex: 'body' },
]


export default function TableApp() {

  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    // this is promis chaining
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(setUsers)
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(setComments)
  }, [])

  return (
    <>
      <h2>Users</h2>
      <Table data={users}
        columns={columns}
        rowKey={"id"}
      //rowKey={(row)=> `${row.name}-${row.id}`}
      />

      <h2>Comments</h2>
      <Table data={comments}
        columns={commentsColumns}
        rowKey={"id"}
      //rowKey={(row)=> `${row.name}-${row.id}`}
      />
    </>
  )
}

