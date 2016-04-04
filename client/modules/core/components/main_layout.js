import React from 'react';
import Header from './header';

const Layout = ({content = () => null }) => (
  <div>
    <Header />
    <div>
    {content()}
    </div>

    <footer>
    <small>Built with <a href='https://github.com/kadirahq/mantra'>Mantra</a> &amp; Meteor.</small>
    </footer>
  </div>
);

export default Layout;
