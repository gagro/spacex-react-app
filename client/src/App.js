import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

// CSS
import "./App.css";

// Components
import MainRouter from "./router/Router";
import AppBar from "./components/AppBar";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache()
})

const history = createBrowserHistory();

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history} key={Math.random()}>
        <AppBar />
        <MainRouter />
      </Router>
    </ApolloProvider>
  );
}

export default App;
