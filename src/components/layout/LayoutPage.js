import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
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
import menus from "../../config/menu.config";
import BreadCrumbPage from "./BreadCrumbPage";
import menuAction from "../../redux/actions/menuAction";
import "./layoutPage.scss";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

@connect(
  ({ menuReducer }) => ({ menuReducer }),
  dispatch =>
    bindActionCreators(
      {
        saveMenuIndex: menuAction.saveMenuIndex
      },
      dispatch
    )
)
class LayoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      title: "海云数据后台管理系统模板",
      company: "Ant Design UI",
      logo:
        "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  clickSidebarMenu = ({ item, key, keyPath }) => {
    this.props.saveMenuIndex(keyPath);
  };

  render() {
    const { route, menuReducer } = this.props;
    const newMenu = menus.map(menu =>
      menu.children && menu.children.length > 0 ? (
        <SubMenu
          key={menu.key}
          title={
            <div>
              <Icon type={menu.icon} />
              <span>{menu.name}</span>
            </div>
          }
        >
          {menu.children.map(children => (
            <Menu.Item key={children.key}>
              <NavLink to={children.path}>{children.name}</NavLink>
            </Menu.Item>
          ))}
        </SubMenu>
      ) : (
        <Menu.Item key={menu.key}>
          <NavLink to={menu.path}>
            <Icon type={menu.icon} />
            <span>{menu.name}</span>
          </NavLink>
        </Menu.Item>
      )
    );

    const ddMenu = (
      <Menu style={{ lineHeight: "63px", fontSize: "14px" }}>
        <Menu.Item key="6" style={{ width: "150px" }}>
          <NavLink to="/">
            <Icon type="user" />
            <span style={{ marginLeft: 8 }}>个人信息</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="99" style={{ width: "150px" }}>
          <NavLink to="/">
            <Icon type="setting" />
            <span style={{ marginLeft: 8 }}>设置</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="9" style={{ width: "150px" }}>
          <NavLink to="/login">
            <Icon type="logout" />
            <span style={{ marginLeft: 8 }}>退出登录</span>
          </NavLink>
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
            <img src={this.state.logo} width="32" alt="" />
            {!this.state.collapsed ? (
              <span className="title">{this.state.company}</span>
            ) : (
              ""
            )}
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[menuReducer.index]}
            defaultOpenKeys={[menuReducer.subIndex]}
            mode="inline"
            className="sider-menu-container"
            inlineCollapsed={this.state.collapsed}
            onClick={this.clickSidebarMenu}
          >
            {newMenu}
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
                    size="default"
                    style={{ backgroundColor: "#87d068" }}
                    icon="user"
                  />
                  <span style={{ marginLeft: 8 }}>zhangwei</span>
                </div>
              </Dropdown>
            </div>
          </Header>
          <BreadCrumbPage />
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
