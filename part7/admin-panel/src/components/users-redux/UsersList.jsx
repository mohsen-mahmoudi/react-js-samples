import React, { useEffect } from 'react'
import Table from '@/ui/Table'
import ClientRequest from '@/tools/ClientRequest'
import { Link } from 'react-router-dom'
import { DeleteOutlined, EditOutlined, EyeOutlined, LoadingOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import { connect } from 'react-redux' // 1 way (it is a high order component [like wrapper])
import { setLoading, setUsers } from '@/redux/actions/users';


function UsersList({ users, setLoading, setUsersData, loading }) {

    console.log(users)

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
            .then(({ data }) => setUsersData(data))
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
        getData();
    }, [])

    return (
        // we use custom table wrapper instead of ant table directly
        <Table data={users} columns={columns} loading={loading} />
        // <Table dataSource={users} columns={columns} /> 
    )
}

//**************************************************** */
// (action) will (dispatch) then (reduce) run and then (store) updated
//**************************************************** */

function mapStateToProps(state) {
    return {
        users: state.users,      // Maps `state.users` to `props.users`
        loading: state.loading,  // Maps `state.loading` to `props.loading`
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setUsersData: (data) => dispatch(setUsers(data)),
        setLoading: (flag) => dispatch(setLoading(flag))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);