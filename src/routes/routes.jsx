import config from "../config";

// Layouts
import { DefaultLayout } from "../layouts/index";
// Pages
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Confession from "../pages/Confession/Confession";

// Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home, layout: DefaultLayout },
  { path: config.routes.aboutus, component: AboutUs, layout: DefaultLayout },
  { path: config.routes.confession, component: Confession, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
