import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage';
import ResultPage from './pages/ResultPage';
import SelectionPage from './pages/SelectionPage';
import ChatBotModal from './components/ChatBotModal';
import { HomeOutlined, CompassOutlined, InfoCircleOutlined } from '@ant-design/icons';

// import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

const App = () => {
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
            <a href="/" style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold'}}>
              Singapore Advisor 
            </a>
            <Menu className="customMenu" 
                  theme='dark' 
                  mode="horizontal" 
                  defaultSelectedKeys={['1']} 
                  style={{ display: 'flex', backgroundColor: 'transparent', justifyContent: 'space-between', width: '25%' }}>
              <Menu.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<CompassOutlined />}>
                <Link to="/explore">Explore</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<InfoCircleOutlined />}>
                <Link to="/about">About</Link>
              </Menu.Item>
            </Menu>
       
          </div>
        </Header>
        <Content style={{ padding: '0 auto', marginTop: 0}}>
          <div style={{ background: 'white', padding: 24, minHeight: 750 }}>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/explore" element={<SelectionPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/result/:id" element={<ResultPage/>} />
              <Route path="/*" element={<HomePage />} />
            </Routes>
            <ChatBotModal />
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
