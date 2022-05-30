import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Layout, Menu } from 'antd';

/**
 * Import all page components here
 */
import LandingPage from '../pages/LandingPage';
import CreditPage from '../pages/CreditPage';

const { Header, Content, Footer, Sider } = Layout;

export const Rroutes = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["landingPage"]}>
        <Menu.Item key="landingPage" onClick={() => { navigate('/') }}>Landing Page</Menu.Item>
        <Menu.Item key="credPage" onClick={() => { navigate('/cred') }}>Credit Page</Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ padding: 0, }} />
      <Content style={{ margin: '24px 16px 0', }} >
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/cred' element={<CreditPage />}></Route>
        </Routes>
      </Content>
        <Footer style={{ textAlign: 'center', }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout> 
  );
};

export default Rroutes;

