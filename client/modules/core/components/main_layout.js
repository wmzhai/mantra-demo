import React from 'react';
import Navigation from './navigation';

const Layout = ({content = () => null }) => (
  <div>
      <header className="header">
          <h1 className="site-title"><a href="/">
              <img alt="Logo" src="/logo.svg" width="150" />
          </a></h1>
          <Navigation />
      </header>

    <div>
    {content()}
    </div>

    <footer>
    <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor.</small>
    </footer>
  </div>
);

export default Layout;
