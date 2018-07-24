import React from "react";
import { Switch } from "react-router-dom";
import { ROUTES } from "../config";

import AuthenticatedRoute from "../containers/authenticated_route";
import Readme from "../containers/readme";
import Contact from "../containers/contact";

const AuthenticatedRoutes = () => (
  <React.Fragment>
    <Switch>
      <AuthenticatedRoute path={ROUTES.README} component={Readme} />
      <AuthenticatedRoute path={ROUTES.CONTACT} component={Contact} />
    </Switch>
  </React.Fragment>
);

export default AuthenticatedRoutes;
