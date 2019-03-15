import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Avatar,
  Dropdown,
  PageHeader
} from "antd";
import "./layoutPage.scss";
import HeaderNav from "./HeaderNav";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class LayoutPage extends Component {
  state = {
    collapsed: false,
    title: "海云数据后台管理系统模板",
    company: "Ant Design UI"
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  clickMenu = ({ item, key, keyPath }) => {
    console.log("item", item);
    console.log("key", key);
    console.log("keyPath", keyPath);
    if (key == 1) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/test");
    }
  };
  render() {
    const { route } = this.props;
    const ddMenu = (
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "63px", fontSize: "14px" }}
      >
        <Menu.Item key="6" style={{ width: "150px" }}>
          <Icon type="user" />
          <span>个人信息</span>
        </Menu.Item>
        <Menu.Item key="99" style={{ width: "150px" }}>
          <Icon type="setting" />
          <span>设置</span>
        </Menu.Item>
        <Menu.Item key="9" style={{ width: "150px" }}>
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout className="layout-container">
        <Sider
          theme="dark"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={250}
          breakpoint="lg"
          className="sider-container"
        >
          <div className="logo">
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              width="32"
              alt=""
            />
            {!this.state.collapsed ? (
              <span className="title">{this.state.company}</span>
            ) : (
              ""
            )}
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            className="sider-menu-container"
            inlineCollapsed={this.state.collapsed}
            onClick={this.clickMenu}
          >
            <Menu.Item key="1">
              <Icon type="home" />
              <span>首页</span>
            </Menu.Item>
            <Menu.Item key="19">
              <Icon type="radar-chart" />
              <span>综合态势</span>
            </Menu.Item>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="cluster" />
                  <span>任务管理</span>
                </span>
              }
            >
              <Menu.Item key="6">任务监测</Menu.Item>
              <Menu.Item key="8">任务列表</Menu.Item>
              <Menu.Item key="9">集中控制</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub3"
              title={
                <span>
                  <Icon type="robot" />
                  <span>指令官管理</span>
                </span>
              }
            >
              <Menu.Item key="11">任务列表</Menu.Item>
              <Menu.Item key="12">设备管理</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="team" />
                  <span>权限管理</span>
                </span>
              }
            >
              <Menu.Item key="3">用户管理</Menu.Item>
              <Menu.Item key="4">角色管理</Menu.Item>
              <Menu.Item key="5">菜单管理</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="layout-page-right-container">
          <Header className="right-header">
            <div className="right-header-left">
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
              <span>{this.state.title}</span>
            </div>
            <div className="right-header-right">
              {/* <div>通知</div> */}
              <Dropdown
                overlay={ddMenu}
                placement="bottomRight"
                className="right-header-right-dropdown"
              >
                <div>
                  <Avatar
                    size="small"
                    style={{ backgroundColor: "#87d068" }}
                    icon="user"
                  />
                  <span style={{ marginLeft: 8 }}>zhangwei</span>
                </div>
              </Dropdown>
            </div>
          </Header>
          <HeaderNav />
          <Content className="layout-page-right-content">
            {/**类似vue里面的router-view */}
            {renderRoutes(route.routes)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutPage;
