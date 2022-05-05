import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import React from "react";
import HomePage from "../pages/home-page/home-page";
import LoginPage from "../pages/login-page";
import { isAuthenticated } from "../utils/session";

const Root = (props: any) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router basename={"example"}>
        <Switch>
          <Route
            path="/login"
            exact
            render={() => {
              return !!isAuthenticated() ? <Redirect to="/" /> : <LoginPage />;
            }}
          />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Root;
