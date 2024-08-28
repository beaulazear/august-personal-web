import React, { useState } from 'react';
import {
  AuditOutlined,
  CloudOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import AboutMe from './components/AboutMe.js';

const { Header, Content, Footer, Sider } = Layout;

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarColor: 'unset',
};

const items = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: 'About Me',
  },
  {
    key: '2',
    icon: <VideoCameraOutlined />,
    label: 'WebDev',
  },
  {
    key: '3',
    icon: <UploadOutlined />,
    label: 'Animal Care',
  },
  {
    key: '4',
    icon: <AuditOutlined />,
    label: 'Resume',
  },
  {
    key: '5',
    icon: <CloudOutlined />,
    label: 'Contact Me',
  },
];

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenuKey, setSelectedMenuKey] = useState('1'); // Initialize as string

  // Function to handle menu item click
  const handleMenuClick = (e) => {
    setSelectedMenuKey(e.key); // `e.key` is already a string
    console.log(`Selected menu item key: ${e.key}`);
  };

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenuKey]}
          items={items}
          onClick={handleMenuClick} // Add the onClick handler
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header
          style={{
            fontSize: '30px',  // Increased font size
            fontWeight: 'bold', // Added font weight for stronger text
            background: colorBgContainer,
          }}
        >
          {selectedMenuKey === '1' && 'Christian Beau Lazear'}
          {selectedMenuKey === '2' && 'Software Development'}
          {selectedMenuKey === '3' && 'Animal Care'}
          {selectedMenuKey === '4' && 'Resume'}
          {selectedMenuKey === '5' && 'Contact Me'}
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 10,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedMenuKey === '1' && <AboutMe />}
            {/* Add content/components for other keys as needed */}
            {selectedMenuKey === '2' && <div>Video Library Content</div>}
            {selectedMenuKey === '3' && <div>Upload Files Content</div>}
            {selectedMenuKey === '4' && <div>Analytics Content</div>}
            {selectedMenuKey === '5' && <div>Cloud Storage Content</div>}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
