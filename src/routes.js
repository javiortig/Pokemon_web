import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import PlayerLogs from "./pages/PlayerLogs/PlayerLogs";
import Login from "./pages/Login/Login";
import Items from "./pages/Items/Items";
import Map from "./pages/Map/Map";
import News from "./pages/News/News";

function Routes() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home/:query?" component={Home} />
          <Route exact path="/menu/items" component={Items} />
          <Route exact path="/menu/playerLogs" component={PlayerLogs} />
          <Route exact path="/menu/map" component={Map} />
          <Route exact path="/details/:name?" component={Details} />
          <Route exact path="/menu/news" component={News} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
