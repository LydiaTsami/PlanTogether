import { MenuProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const useHome = () => {
  const headerItems: MenuProps["items"] = [
      { key: "calendars", label: "Calendars" },
    ],
    siderItems = [
      {
        key: "login",
        label: React.createElement(Link, { to: "/login" }, "Login"),
      },
      {
        key: "register",
        label: React.createElement(Link, { to: "/register" }, "Register"),
      },
    ];

  return { headerItems, siderItems };
};
