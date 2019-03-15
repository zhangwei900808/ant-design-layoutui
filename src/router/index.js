import Index from "../pages/Index";
import Test from "../pages/Test";
import LayoutPage from "../components/layout/LayoutPage";

const routes = [
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
        title: "sss",
        component: Test
      }
    ]
  }
];

export default routes;
