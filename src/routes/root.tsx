import { Suspense } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import React from "react";
import LoginPage from "../pages/login-page/login-page";
import { isAuthenticated } from "../utils/session";
import PrivateRoute from "./private-route";
import RouteContainer from "./route-container";
import RegisterPage from "../pages/register-page/register-page";

const Root = (props: any) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router basename={"example"}>
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route
            path="/login"
            exact
            render={() => {
              return !!isAuthenticated() ? (
                <Redirect to="/home" />
              ) : (
                <LoginPage />
              );
            }}
          />
          <PrivateRoute path="/" component={RouteContainer} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Root;
