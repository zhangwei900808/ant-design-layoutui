import Index from "../pages/Index";
import Test from "../pages/Test";
import LayoutPage from "../components/layout/LayoutPage";
import Login from "../pages/login/Login";

const routes = [
  {
    component: Login,
    exact: true,
    path: "/login"
  },
  {
    component: LayoutPage,
    routes: [
      {
        path: "/",
        exact: true,
        component: Index
      },
      {
        path: "/test",
        title: "测试",
        component: Test
      }
    ]
  }
];

export default routes;
