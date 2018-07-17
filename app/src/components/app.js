import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import ROUTES from "../config/app_routes";

import Header from "./header";
import Home from "./home";
import Contact from "./contact";
import Readme from "./readme";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />

          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path={ROUTES.CONTACT} component={Contact} />
              <Route path={ROUTES.README} component={Readme} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
