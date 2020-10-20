import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
  Router,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";

// CSS
import "./App.css";

// Components
import Sidebar from "./components/Sidebar";
import Launches from "./views/Launches";
import Missions from "./views/Missions";
import Rockets from "./views/Rockets";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache()
})

const history = createBrowserHistory();

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history} key={Math.random()}>
        <Sidebar />
        <div style={{ marginLeft: "210px", padding: "20px" }}>
          <Redirect from="/" to="/launches" />
          <Route
            exact
            path="/launches"
            component={Launches}
          />
          <Route
            exact
            path="/missions"
            component={Missions}
          />
          <Route
            exact
            path="/rockets"
            component={Rockets}
          />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
