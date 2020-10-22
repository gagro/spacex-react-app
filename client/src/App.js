import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// CSS
import "./App.css";

// Components
import Sidebar from "./components/Sidebar";
import Routes from "./components/Routes";

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
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
