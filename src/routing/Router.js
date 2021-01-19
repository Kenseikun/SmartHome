import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Rooms from "../views/Rooms";
import SingleRoom from "../views/SingleRoom";

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Rooms} />
      <Route path={routes.room} component={SingleRoom} />
    </Switch>
  );
};

export default Router;
