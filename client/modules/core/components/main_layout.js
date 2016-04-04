import React from 'react';
import Header from './header';

const Layout = ({content = () => null }) => (
  <div>
    <Header />

    <main className="app-layout">
      {content()}
    </main>

    <footer className="site-footer">
      <small>基于<a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor构建.</small>
    </footer>
  </div>
);

export default Layout;
