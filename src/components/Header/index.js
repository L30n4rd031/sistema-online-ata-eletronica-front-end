import React from 'react';
import { Link, BrowserRouter, Switch } from 'react-router-dom';

import './styles.css';

const Header = () => (
  <div>
    <header id="main-header">
      Ata Eletrônica
    </header>
    <nav id="main-nav">
      <BrowserRouter>
      <Switch>
        <ul>
          <li><Link to="/addatas">Adicionar</Link></li>
        </ul>
        </Switch>
      </BrowserRouter>
    </nav>
  </div>

);


export default Header;
