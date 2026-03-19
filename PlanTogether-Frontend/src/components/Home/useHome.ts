import { MenuProps } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const useHome = () =>
{
  // const isAuthenticated = sessionStorage.getItem("token") !== null;
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  const location = useLocation();

  const headerItems: MenuProps["items"] = [
    {
      key: "administration",
      label: React.createElement(Link, { to: "/administration" }, "Administration"),
    },
  ];

  const administrationSiderItems: MenuProps["items"] = [
    {
      key: "users",
      label: React.createElement(Link, { to: "/administration/users" }, "Users"),
    },
    {
      key: "test",
      label: React.createElement(Link, { to: "/administration/test" }, "Test"),
    },
  ];

  const siderItems: MenuProps["items"] = location.pathname.startsWith("/administration")
    ? administrationSiderItems
    : [];

  const items: MenuProps["items"] = [
    {
      label: React.createElement(Link, { to: "/login" }, "Login"),
      key: "login",
    },
    {
      label: React.createElement(Link, { to: "/register" }, "Register"),
      key: "register",
    },
    {
      label: "logout",
      key: "logout",
    },
  ];

  const menuProps = {
    items,
  };

  return {
    headerItems,
    siderItems,
    menuProps,
    siderCollapsed,
    setSiderCollapsed,
  };
};
