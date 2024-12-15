import { Col, Layout, Menu, Row } from "antd";
import React from "react";
import "./Home.css";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../Login/Login.tsx";
import Register from "../Register/Register.tsx";
import Welcome from "../Welcome/Welcome.tsx";
import { useHome } from "./useHome.ts";

const { Header, Sider, Content, Footer } = Layout;

const Home: React.FC = () => {
  const { headerItems, siderItems } = useHome();

  return (
    <Layout className="general-layout">
      <Header className="header">
        <Row>
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
              style={{ flex: 1, minWidth: 0 }}
            />
          </Col>
        </Row>
      </Header>
      <Layout className="layout">
        <Sider className="sider" collapsible>
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
          <div className="padded-content">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
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
