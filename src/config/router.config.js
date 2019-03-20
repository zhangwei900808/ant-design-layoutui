import RouterView from "../components/common/RouterView";
import Index from "../pages/Index";
import Test from "../pages/Test";

//注：菜单和路由都是基于该路由数据生成
//菜单可以不全部展示在页面上(隐藏)，但路由必须全部要定义
//后期可以加入权限控制
const routerConfig = [
  {
    key: "1",
    name: "首页",
    icon: "home",
    path: "/",
    exact: true,
    component: Index
  },
  {
    key: "2",
    name: "综合态势",
    icon: "radar-chart",
    path: "/test",
    component: Test
  },
  {
    key: "3",
    name: "作业管理",
    icon: "cluster",
    path: "/work",
    component: RouterView,
    routes: [
      {
        key: "3-1",
        name: "作业监测",
        path: "/work/monitor",
        component: Index,
        routes: [
          {
            key: "3-1-1",
            name: "添加作业",
            path: "/work/monitor/add",
            component: Test
          }
        ]
      },
      {
        key: "3-2",
        name: "作业列表",
        path: "/work/list",
        component: Test
      },
      {
        key: "3-3",
        name: "集中控制",
        path: "/work/control",
        component: Index
      }
    ]
  },
  {
    key: "4",
    name: "指令官管理",
    icon: "robot",
    path: "/command",
    component: RouterView,
    routes: [
      {
        key: "4-1",
        name: "任务列表",
        path: "/command/test",
        component: Test
      },
      {
        key: "4-2",
        name: "设备管理",
        path: "/command/device",
        component: Index
      }
    ]
  },
  {
    key: "5",
    name: "权限管理",
    icon: "team",
    path: "/role",
    component: RouterView,
    routes: [
      {
        key: "5-0",
        name: "区域管理",
        path: "/role/area",
        component: Test
      },
      {
        key: "5-1",
        name: "用户管理",
        path: "/role/user",
        component: Index
      },
      {
        key: "5-2",
        name: "角色管理",
        path: "/role/roleManage",
        component: Test
      }
    ]
  }
];

export default routerConfig;
