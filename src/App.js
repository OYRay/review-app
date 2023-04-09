import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage';
import ResultPage from './pages/ResultPage';

// import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ background: 'white'}}>
        <Header className='App-header'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <a href="/" style={{ color: 'white', fontSize: '1.5rem' }}>
              Singapore Advisor 
            </a>
            <Menu className="customMenu" theme='dark' mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div style={{ background: 'white', padding: 24, minHeight: 640 }}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/result/:id" element={<ResultPage/>} />
              <Route path="/*" element={<HomePage />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Singapore Advisor ©2023
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
