import React from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../../components/LoginButton";
import { LogoutButton } from "../../components/LogoutButton";
import { Layout, Menu, Breadcrumb } from "antd";
const { Header } = Layout;
const { SubMenu } = Menu;
function Headers() {
  const { isAuthenticated } = useAuth0();
  return (
    <Header className="App-header">
      {" "}
      <header className="App-header">
        <picture className="header-picture">
          <div className="App-header-login">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Imagotipo_de_la_Universidad_de_la_Amazonia.svg/1024px-Imagotipo_de_la_Universidad_de_la_Amazonia.svg.png"
              /*   className="logo"*/ className="App-logo"
              alt="logo"
            />
          </div>
        </picture>
        <Menu
          className="App-header"
          mode="horizontal"
          defaultSelectedKeys={["5"]}
        >
          <Menu.Item key="1">About</Menu.Item>
          <Menu.Item key="2">Service</Menu.Item>
          <Menu.Item key="3">Team</Menu.Item>
          <Menu.Item key="4">Activity</Menu.Item>
          <Menu.Item key="5">Help</Menu.Item>
        </Menu>
        <p className="App-nav">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}{" "}
        </p>
      </header>{" "}
    </Header>
  );
}

export { Headers };
