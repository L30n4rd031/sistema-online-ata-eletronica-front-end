import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './styles.css';

const Header = () => (
  <div>
    <header id="main-header">
      Ata Eletrônica
    </header>
    <nav id="main-nav">
      <BrowserRouter>
        <ul>
          <li><Link to="/ata">Adicionar</Link></li>
        </ul>
      </BrowserRouter>
    </nav>
  </div>

);


export default Header;
