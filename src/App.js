import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.scss";
import {routes} from '../src/routes/index';

function App() {
  return (
<div className="App">
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={i}
              />
            ))}
          </Switch>
        </Router>
      </div>
  );
}

export default App;
