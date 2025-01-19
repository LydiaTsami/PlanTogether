import { MenuProps } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const useHome = () => {
  // const isAuthenticated = sessionStorage.getItem("token") !== null;
  const [siderCollapsed, setSiderCollapsed] = useState(false);

  const headerItems: MenuProps["items"] = [
    {
      key: "calendars",
      label: React.createElement(Link, { to: "/events" }, "Events"),
    },
  ];

  const siderItems: { key: string; label: string }[] = [
    { key: "allEvents", label: "All Events" },
    { key: "myEvents", label: "My Events" },
  ];

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
