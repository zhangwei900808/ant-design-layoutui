import LayoutPage from "../components/layout/LayoutPage";
import Login from "../pages/login/Login";
import routerConfig from "../config/router.config";
import NoMatch from "../pages/NoMatch";

//不同的用户不同的权限显示的路由也是变的
const routes = [
  {
    component: Login,
    exact: true,
    path: "/login"
  },
  {
    component: LayoutPage,
    routes: routerConfig
  },
  {
    component: NoMatch
  }
];

export default routes;
