import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import CreateAta from './pages/createAta';
import Ata from './pages/ata';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
      <Route path="/ata" component={CreateAta} />
      <Route path="/ata/:id" component={Ata} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
