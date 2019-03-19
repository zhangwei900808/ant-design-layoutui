import LayoutPage from "../components/layout/LayoutPage";
import Login from "../pages/login/Login";
import menus from "../config/menu.config";
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
    routes: menus
  }
  // {
  //   component: NoMatch
  // }
];

export default routes;