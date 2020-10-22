import React from "react";
import { Route } from "react-router-dom";

// Components
import Launches from "../views/Launches";
import Missions from "../views/Missions";
import Rockets from "../views/Rockets";
import Secret from "../views/Secret";
import Launch from "../views/Luanch";
import Mission from "../views/Mission";
import Rocket from "../views/Rocket";

const Routes = () => (
    <div style={{ marginLeft: "210px", padding: "20px" }}>
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
        <Route
            exact
            path="/launch/:flight_number"
            render={props => <Launch {...props} />}
        />
        <Route
            exact
            path="/mission/:mission_id"
            render={props => <Mission {...props} />}
        />
        <Route
            exact
            path="/rocket/:rocket_id"
            render={props => <Rocket {...props} />}
        />
    </div>
)

export default Routes;