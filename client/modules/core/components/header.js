import React from 'react';
import Navigation from './navigation';

const Header = () => (
  <header className="header">
    <h1 className="site-title"><a href="/">
      <img alt="Logo" src="/logo.svg" width="150" />
    </a></h1>
    <Navigation />
  </header>
);

export default Header;