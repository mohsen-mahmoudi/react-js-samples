import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'antd/es/layout';
import { Content } from 'antd/es/layout/layout';

import Header from './general/Header';
import Sidebar from './general/Sidebar';
import Footer from './general/Footer';

import '../assets/styles/main.css'
import Providers from '../providers/Providers';

import Dashboard from './main/Dashboard';
import UsersList from './users/UsersList';
import { message } from 'antd';
import { initMessage } from '@/tools/Message';
import UsersDetail from './users/UsersDetail';
import UsersAdd from './users/UsersAdd';
import UsersEdit from './users/UsersEdit';

import UsersListRedxu from './users-redux/UsersList'
import UsersDetailRedux from './users-redux/UsersDetail'
import UsersAddRedux from './users-redux/UsersAdd'
import UsersEditRedux from './users-redux/UsersEdit'

function App() {

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    initMessage(messageApi);
  }, [messageApi]);

  return (
    <>
      {contextHolder}
      <Providers>
        <Layout>
          <Sidebar />
          <Layout>
            <Header>Header</Header>
            <Content className='content'>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/users' element={<UsersList />} />
                <Route path='/users/:id' element={<UsersDetail />} />
                <Route path='/users/add' element={<UsersAdd />} />
                <Route path='/users/:id/edit' element={<UsersEdit />} />

                <Route path='/users-redux' element={<UsersListRedxu />} />,
                <Route path='/users-redux/:id' element={<UsersDetailRedux />} />,
                <Route path='/users-redux/add' element={<UsersAddRedux />} />,
                <Route path='/users-redux/:id/edit' element={<UsersEditRedux />} />

              </Routes>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </Providers>
    </>
  );
}

export default App;
