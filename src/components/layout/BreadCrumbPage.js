import React, { Component } from "react";
import { Breadcrumb, Icon } from "antd";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./breadCrumbPage.scss";

@connect(({ router }) => ({
  router
}))
class BreadCrumbPage extends Component {
  constructor(props) {
    super(props);
  }
  /**
   * 获取访问的路由所属层级结构
   */
  getRouteObj = (routes, searchPathNames, nestRoutes) => {
    // 获取要访问的路由路径层数组中的首个,如：/work/monitor/add->['work']
    let searchPathName = searchPathNames.shift();

    routes.forEach(r => {
      //获取路由路径名称，如：/work/list->['work','list']
      const pathNames = r.path.split("/").filter(d => d);
      pathNames.forEach(name => {
        //如果要访问的路径名和路由路径名相同则继续
        if (name == searchPathName) {
          //判断要访问的路径名是否是最后一个，如果不是则递归查询
          if (searchPathNames.length > 0 && r.routes && r.routes.length > 0) {
            // 递归查询，传递的参数：该路由下的子路由数组，要访问的剩余路由路径，保存路径的数组
            this.getRouteObj(r.routes, searchPathNames, nestRoutes);
          }
          //保存查询到的路由到数组中
          nestRoutes.push(r);
        }
      });
    });
    //返回已经保存到路由中的数组
    return nestRoutes;
  };

  render() {
    const { route, router } = this.props;
    // 获取当前访问的路径，并拆分成数组，如：/work/list->['work','list']
    const pathnames = router.location.pathname.split("/").filter(d => d);
    const nestRoutes = this.getRouteObj(route.routes, pathnames, []);
    const bcb = nestRoutes.reverse().map((route, index) => (
      <Breadcrumb.Item key={route.key}>
        <NavLink to={route.path}>
          {route.icon ? <Icon type={route.icon} /> : ""}
          <span>{route.name}</span>
        </NavLink>
      </Breadcrumb.Item>
    ));
    console.log("nestRoutes=", nestRoutes);
    return (
      <div className="header-nav-container">
        <Breadcrumb separator="/">{bcb}</Breadcrumb>
      </div>
    );
  }
}

export default BreadCrumbPage;
