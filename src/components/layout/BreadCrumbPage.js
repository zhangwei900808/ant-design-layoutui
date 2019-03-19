import React, { Component } from "react";
import { Breadcrumb, Icon } from "antd";
import "./breadCrumbPage.scss";

class BreadCrumbPage extends Component {
  render() {
    return (
      <div className="header-nav-container">
        <Breadcrumb separator="/">
          <Breadcrumb.Item>
            <Icon type="home" />
            <span>首页</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>综合态势</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadCrumbPage;
