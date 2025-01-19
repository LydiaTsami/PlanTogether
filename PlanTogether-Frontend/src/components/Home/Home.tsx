import { Button, Col, Dropdown, Layout, Menu, Row } from "antd";
import React from "react";
import "./Home.css";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./Login/Login.tsx";
import Register from "./Register/Register.tsx";
import Welcome from "./Welcome/Welcome.tsx";
import { useHome } from "./useHome.ts";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Events from "./Events/Events.tsx";

const { Header, Sider, Content, Footer } = Layout;

const Home: React.FC = () => {
  const {
    headerItems,
    siderItems,
    menuProps,
    siderCollapsed,
    setSiderCollapsed,
  } = useHome();

  return (
    <Layout className="general-layout">
      <Header className="header">
        <Row justify="space-between">
          <Col>
            <Row justify="space-between">
              <Col>
                <Link to="/">
                  <div className="logo">PlanTogether</div>
                </Link>
              </Col>
              <Col>
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={["2"]}
                  items={headerItems}
                  className="header-menu"
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Dropdown menu={menuProps}>
              <Button
                className={"avatar"}
                size={"large"}
                shape="circle"
                icon={<UserOutlined />}
              ></Button>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout className="layout">
        <Sider
          className="sider"
          collapsible
          collapsedWidth="0"
          trigger={null}
          collapsed={siderCollapsed}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            className="menu"
            items={siderItems}
          />
        </Sider>
        <Content className="content">
          <div
            className={"sider-trigger"}
            onClick={() => setSiderCollapsed(!siderCollapsed)}
          >
            {siderCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </div>
          <div className="padded-content">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </div>
        </Content>
      </Layout>
      <Footer className="footer">
        Created by the love of your live {"<3"}
      </Footer>
    </Layout>
  );
};

export default Home;
