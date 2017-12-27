import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  RegisterScreen,
  WinnerScreen,
} from '../screens';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={RegisterScreen} />
      <Route path="/winner" exact render={props => <WinnerScreen {...props} />} />
    </Switch>
  </BrowserRouter>
);
