import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./APP.CSS";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginButton from "./Component/LoginButtin";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router";
import FavWatch from "./Component/FavWatch.JS";
import Home from "./Component/Home";
export class App extends Component {
  render() {
    return (
      <div>
        <Route>
          <Header />
        </Route>
        <Switch>
          <Route exact path="/Home">
            {isAuthenticated ? <Home /> : <LoginButton />}
          </Route>

          <Route exact path="/FavWatch">
            {isAuthenticated ? <FavWatch /> : <LoginButton />}
          </Route>
          {/* @todo show login button and hide the list for unauthenticated users */}
          {/* @todo show logout button and show items list components for authenticated users */}
        </Switch>
        <Route>
          <Footer />
        </Route>
      </div>
    );
  }
}

export default withAuth0(App);
