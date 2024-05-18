import { useState } from "react";
import { Form, Input, Layout } from "antd";

import "./LayoutDefault.css";
import logo from "../../assets/images/logo/dark.png";
import {
  SearchOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import MenuSider from "../../components/Admin/Menu/index";
import { Outlet } from "react-router-dom";
import { Footer } from "antd/es/layout/layout";
import Notify from "../../components/Admin/Notify";
const { Search } = Input;

const { Sider, Content } = Layout;

function LayoutDefaultAdmin() {
  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed);

  const onSearch = (value, event) => {
    console.log(event?.nativeEvent?.type, value);
    // Do something with the search value
  };
  return (
    <>
      <Layout className="layout-default">
        {/* header */}
        <header className="header">
          <div
            className={
              "header__logo " + (collapsed && "header__logo--collapsed")
            }
          >
            {/* <img src={collapsed ? logo_fold : logo} alt="logo" /> */}
            <img src={logo} alt="logo" />
          </div>

          <div className="header__nav">
            <div className="header__nav-left">
              <div
                className="header__collapse"
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                {/* <MenuFoldOutlined /> */}
              </div>

              <div className="header__search">
              
                <Search
                  placeholder="Input search text"
                  enterButton
                  onSearch={value => onSearch(value, 'click')}
                />
                
              </div>
            </div>

            <div className="header__nav-right">
              <Notify />
            </div>
          </div>
        </header>

        {/* Layout */}
        <Layout>
          <Sider className="slider" collapsed={collapsed} theme="light">
            <MenuSider />
          </Sider>
          <Content className="content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      {/* FOOTER */}
      <Footer>footer</Footer>
    </>
  );
}

export default LayoutDefaultAdmin;
