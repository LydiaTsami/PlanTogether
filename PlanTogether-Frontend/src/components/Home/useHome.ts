import { MenuProps } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const useHome = () =>
{
  const isAuthenticated = sessionStorage.getItem("token") !== null;
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  const location = useLocation();

  const headerItems: MenuProps["items"] = isAuthenticated
    ? [
      {
        key: "administration",
        label: React.createElement(Link, { to: "/administration" }, "Administration"),
      },
    ]
    : [];

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

  const siderItems: MenuProps["items"] = isAuthenticated && location.pathname.startsWith("/administration")
    ? administrationSiderItems
    : [];

  const siderSelectedKeys = location.pathname.split("/").pop() ? [location.pathname.split("/").pop()!] : [];

  const items: MenuProps["items"] = isAuthenticated
    ? [
      {
        label: "Logout",
        key: "logout",
      },
    ]
    : [
      {
        label: React.createElement(Link, { to: "/login" }, "Login"),
        key: "login",
      },
      {
        label: React.createElement(Link, { to: "/register" }, "Register"),
        key: "register",
      },
    ];

  const onMenuClick: MenuProps["onClick"] = (e) =>
  {
    if (e.key === "logout")
    {
      sessionStorage.removeItem("token");
      window.location.replace("/");
    }
  };

  const menuProps = {
    items,
    onClick: onMenuClick,
  };

  return {
    isAuthenticated,
    headerItems,
    siderItems,
    siderSelectedKeys,
    menuProps,
    siderCollapsed,
    setSiderCollapsed,
  };
};
