import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Project from "./pages/project";

import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

function App() {
  const navigate = useNavigate();

  return (
    <>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            items={[
              { key: '1', label: 'Dashboard', onClick: () => navigate('/') },
            ]}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </Content>
    </>
  )
}

export default App
