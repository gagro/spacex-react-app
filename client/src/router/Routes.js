import { lazy } from "react";

// Components
const Launches = lazy(() => import("../views/Launches"));
const Missions = lazy(() => import("../views/Missions"));
const Rockets = lazy(() => import("../views/Rockets"));

const routes = [
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
        path: "rockets",
        component: Rockets,
    }
];

export default routes;
