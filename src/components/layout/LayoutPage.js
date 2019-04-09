import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Layout, Menu, Icon, Avatar, Dropdown } from "antd";
import baseConfig from "../../config/base.config";
import routerConfig from "../../config/router.config";
import BreadCrumbPage from "./BreadCrumbPage";
import layoutPageAction from "../../redux/actions/layoutPageAction";
import authAction from "../../redux/actions/authAction";
import "./layoutPage.scss";

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

@withRouter
@connect(
  ({ layoutPageReducer }) => ({ layoutPageReducer }),
  {
    saveMenuIndex: layoutPageAction.saveMenuIndex,
    saveMenuCollapsed: layoutPageAction.saveMenuCollapsed,
    signOut: authAction.signOut
  }
)
class LayoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  toggle = () => {
    this.props.saveMenuCollapsed(!this.props.layoutPageReducer.collapsed);
  };

  clickDropdownMenu = ({ item, key, keyPath }) => {
    if (key === "signout") {
      this.props.signOut();
    }
  };

  clickSidebarMenu = ({ item, key, keyPath }) => {
    this.props.saveMenuIndex(keyPath);
  };

  componentDidMount() {
    // const branch = matchRoutes(routes, "/child/23");
    // console.log("branch", branch);
  }
  // componentWillReceiveProps(nextProps) {
  //   const navigated = nextProps.location !== this.props.location;
  //   const { routes } = this.props;
  //   console.log("navigated", navigated);
  //   console.log("routes", routes);
  // }
  render() {
    const { route, layoutPageReducer } = this.props;
    // console.log('route', route);

    const newMenu = routerConfig.map(routeData =>
      routeData.routes && routeData.routes.length > 0 ? (
        <SubMenu
          key={routeData.key}
          title={
            <div>
              <Icon type={routeData.icon} />
              <span>{routeData.name}</span>
            </div>
          }
        >
          {routeData.routes.map(children => (
            <Menu.Item key={children.key}>
              <NavLink to={children.path}>{children.name}</NavLink>
            </Menu.Item>
          ))}
        </SubMenu>
      ) : (
        <Menu.Item key={routeData.key}>
          <NavLink to={routeData.path}>
            <Icon type={routeData.icon} />
            <span>{routeData.name}</span>
          </NavLink>
        </Menu.Item>
      )
    );

    const ddMenu = (
      <Menu onClick={this.clickDropdownMenu} style={{ lineHeight: "63px", fontSize: "14px" }}>
        <Menu.Item key="dm-setting" style={{ width: "150px" }}>
          <NavLink to="/">
            <Icon type="setting" />
            <span style={{ marginLeft: 8 }}>设置</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="signout" style={{ width: "150px" }}>
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    );

    return (
      <Layout className="layout-container">
        <Sider theme="dark" trigger={null} collapsible collapsed={layoutPageReducer.collapsed} width={250} breakpoint="lg" className="sider-container">
          <div className="logo">
            <img src={baseConfig.logo} width="32" alt="" />
            {!layoutPageReducer.collapsed ? <span className="title">{baseConfig.company}</span> : ""}
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={[layoutPageReducer.index]}
            defaultOpenKeys={[layoutPageReducer.subIndex]}
            mode="inline"
            className="sider-menu-container"
            inlineCollapsed={layoutPageReducer.collapsed}
            onClick={this.clickSidebarMenu}
          >
            {newMenu}
          </Menu>
        </Sider>
        <Layout className="layout-page-right-container">
          <Header className="right-header">
            <div className="right-header-left">
              <Icon className="trigger" type={layoutPageReducer.collapsed ? "menu-unfold" : "menu-fold"} onClick={this.toggle} />
              <span>{baseConfig.title}</span>
            </div>
            <div className="right-header-right">
              {/* <div>通知</div> */}
              <Dropdown overlay={ddMenu} placement="bottomRight" className="right-header-right-dropdown">
                <div>
                  <Avatar size="default" style={{ backgroundColor: "#87d068" }} icon="user" />
                  <span style={{ marginLeft: 8 }}>zhangwei</span>
                </div>
              </Dropdown>
            </div>
          </Header>
          {/* <BreadCrumbPage route={route} /> */}
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
