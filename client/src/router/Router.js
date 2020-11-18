import React, { Suspense } from "react";
import { Route } from "react-router-dom";

// Components
import Loader from "../components/Loader";
import Title from "../components/Title";

// Routes
import routes from "./Routes";

const Router = () => (
   <Suspense fallback={<Loader />}>
      {routes.map(item => {
         const { path, title, component: Component } = item;
         return (
            <Route
               exact
               key={item.title}
               path={path}
               render={props => (
                  <main className="container">
                     <Title title={title} />
                     <Component {...props} />
                  </main>
               )}
            />
         )
      })}
   </Suspense>
)

export default Router;