import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

// Components
import Loader from "./Loader";
const Launches = lazy(() => import("../views/Launches"));
const Missions = lazy(() => import("../views/Missions"));
const Rockets = lazy(() => import("../views/Rockets"));
const Secret = lazy(() => import("../views/Secret"));

const Routes = () => (
    <div style={{ marginLeft: "210px", padding: "20px" }}>
        <Suspense fallback={Loader}>
            <Route
                exact
                path="/launches"
                render={props => <Launches {...props} />}
            />
            <Route
                exact
                path="/missions"
                render={props => <Missions {...props} />}
            />
            <Route
                exact
                path="/rockets"
                render={props => <Rockets {...props} />}
            />
            <Route
                exact
                path="/secret"
                render={props => <Secret {...props} />}
            />
        </Suspense>
    </div>
)

export default Routes;