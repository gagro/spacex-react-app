import { lazy } from "react";

// Components
const Launches = lazy(() => import("../views/Launches"));
const Missions = lazy(() => import("../views/Missions"));
const Rockets = lazy(() => import("../views/Rockets"));
const Dashboard = lazy(() => import("../views/Dashboard"));
const Ships = lazy(() => import("../views/Ships"));

const routes = [
   {
      title: "Dashboard",
      path: "/",
      component: Dashboard,
   },
   {
      title: "Launches",
      path: "/launches",
      component: Launches,
   },
   {
      title: "Missions",
      path: "/missions",
      component: Missions,
   },
   {
      title: "Rockets",
      path: "/rockets",
      component: Rockets,
   },
   {
      title: "Ships",
      path: "/ships",
      component: Ships,
   }
];

export default routes;
