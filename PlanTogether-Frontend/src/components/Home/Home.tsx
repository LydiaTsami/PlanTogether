import { Layout, Menu, MenuProps } from "antd";
import React from "react";
import "./Home.css";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../Login/Login.tsx";
import Register from "../Register/Register.tsx";
import Welcome from "../Welcome/Welcome.tsx";

const { Header, Content, Footer, Sider } = Layout,
  headerItems: MenuProps["items"] = [],
  siderItems = [
    { key: "welcome", label: <Link to="/">Welcome</Link> },
    { key: "login", label: <Link to="/login">Login</Link> },
    { key: "register", label: <Link to="/register">Register</Link> },
  ],
  Home: React.FC = () => {
    return (
      <Layout className="general-layout">
        <Header className="header">
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={headerItems}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Layout className="layout">
          <Sider className="sider">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              className="menu"
              items={siderItems}
            />
          </Sider>
          <Content>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    );
  };

export default Home;
