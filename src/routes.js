import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import PlayerLogs from "./pages/PlayerLogs/PlayerLogs";

function Routes() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/:query?" component={Home} />
          <Route exact path="/menu/playerLogs" component={PlayerLogs} />
          <Route exact path="/details/:name?" component={Details} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
