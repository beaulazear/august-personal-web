import React, { useState } from 'react';
import {
  AuditOutlined,
  MailOutlined,
  HeartOutlined,
  UserOutlined,
  JavaScriptOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import AboutMe from './components/AboutMe.js';
import AnimalCare from './components/AnimalCare.js';
import Software from './components/Software.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';

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
    icon: <JavaScriptOutlined />,
    label: 'WebDev',
  },
  {
    key: '3',
    icon: <HeartOutlined />,
    label: 'Animal Care',
  },
  {
    key: '4',
    icon: <AuditOutlined />,
    label: 'Resume',
  },
  {
    key: '5',
    icon: <MailOutlined />,
    label: 'Contact Me',
  },
];

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState('1');

  const handleMenuClick = (e) => {
    setSelectedMenuKey(e.key);
    console.log(`Selected menu item key: ${e.key}`);
  };

  return (
    <Layout hasSider>
      <Sider
        style={siderStyle}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        collapsedWidth={80} // Sidebar will not disappear completely, just shrink to 80px width
        breakpoint="md" // Collapse on medium screens and smaller
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenuKey]}
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout style={{ marginInlineStart: collapsed ? 80 : 200 }}>
        <Header
          style={{
            fontSize: '24px', // Adjusted font size for consistency
            fontWeight: '600', // Consistent font weight
            background: '#001529', // Dark background to match menu
            color: '#fff', // White text for contrast
            textAlign: 'center', // Center text
            borderBottom: '1px solid #f0f0f0', // Subtle bottom border
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
          }}
        >
          {selectedMenuKey === '1' && 'Beau Lazear'}
          {selectedMenuKey === '2' && 'WebDev 🖥️'}
          {selectedMenuKey === '3' && 'Animal Care 🦮'}
          {selectedMenuKey === '4' && 'Resume'}
          {selectedMenuKey === '5' && 'Contact Me'}
        </Header>
        <Content
          style={{
            margin: '20px 12px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedMenuKey === '1' && <AboutMe />}
            {selectedMenuKey === '2' && <Software />}
            {selectedMenuKey === '3' && <AnimalCare />}
            {selectedMenuKey === '4' && <Resume />}
            {selectedMenuKey === '5' && <Contact />}
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
