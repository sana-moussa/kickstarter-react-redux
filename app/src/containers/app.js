import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { ROUTES } from "../config";
import { connect } from "react-redux";

import Header from "../components/header";
import Home from "./home";
import Contact from "./contact";
import Readme from "./readme";
import Alerts from "./alerts";
import Authentication from "./authentication";
import Registration from "./registration";

class App extends React.Component {
  render() {
    const { alerts } = this.props;

    return (
      <BrowserRouter>
        <div className="container">
          <Header />

          <div className="content">
            <div>
              <Alerts alerts={alerts} />
            </div>
            <Switch>
              <Route path={ROUTES.LOGIN} component={Authentication} />
              <Route path={ROUTES.REGISTRATION} component={Registration} />
              <Route exact path={ROUTES.HOME} component={Home} />
              <Route path={ROUTES.CONTACT} component={Contact} />
              <Route path={ROUTES.README} component={Readme} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  };
}

export default connect(mapStateToProps)(App);
