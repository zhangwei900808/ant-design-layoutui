import Index from "../pages/Index";
import Test from "../pages/Test";

//菜单是不变的，但是不同的用户权限显示的菜单是变的
const menus = [
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
    children: [
      {
        key: "3-1",
        name: "作业监测",
        path: "/",
        component: Index
      },
      {
        key: "3-2",
        name: "作业列表",
        path: "/test",
        component: Test
      },
      {
        key: "3-3",
        name: "集中控制",
        path: "/",
        component: Index
      }
    ]
  },
  {
    key: "4",
    name: "指令官管理",
    icon: "robot",
    children: [
      {
        key: "4-1",
        name: "任务列表",
        path: "/test",
        component: Test
      },
      {
        key: "4-2",
        name: "设备管理",
        path: "/iii"
      }
    ]
  },
  {
    key: "5",
    name: "权限管理",
    icon: "team",
    children: [
      {
        key: "5-0",
        name: "区域管理",
        path: "/test",
        component: Test
      },
      {
        key: "5-1",
        name: "用户管理",
        path: "/",
        component: Index
      },
      {
        key: "5-2",
        name: "角色管理",
        path: "/test",
        component: Test
      },
      {
        key: "5-3",
        name: "菜单管理",
        path: "/",
        component: Index
      }
    ]
  }
];

export default menus;
