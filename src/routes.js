import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Create from './pages/create';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
      <Route path="/criar" component={Create} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
