import React from 'react';
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

function App() {

  return (
    <Providers>
      <Layout>
        <Sidebar />
        <Layout>
          <Header>Header</Header>
          <Content className='content'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/users' element={<UsersList />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </Providers>
  );
}

export default App;
