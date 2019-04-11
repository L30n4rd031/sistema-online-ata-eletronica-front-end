import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => (
  <nav className="menu">
    <ul>
          <Link><a to="/">Atas</a></Link>
          <Link><a to="/criar">Criar</Link></li>
    </ul>
  </nav>

);


export default Header;
