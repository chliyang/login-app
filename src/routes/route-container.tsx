import { Redirect, Switch } from "react-router-dom";
import React from "react";
import HomePage from "../pages/home-page/home-page";
import PrivateRoute from "./private-route";

const RouteContainer = (props: any) => {
  return (
    <Switch>
      <PrivateRoute path="/home" exact auth component={HomePage} />
      <Redirect exact to="/home" />
    </Switch>
  );
};

export default RouteContainer;
