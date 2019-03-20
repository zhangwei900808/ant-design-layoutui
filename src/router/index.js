import LayoutPage from "../components/layout/LayoutPage";
import Login from "../pages/login/Login";
import routerConfig from "../config/router.config";
import NoMatch from "../pages/NoMatch";
import RouterView from "../components/common/RouterView";

//不同的用户不同的权限显示的路由也是变的
const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    component: LayoutPage,
    routes: routerConfig
  }
];

export default routes;
