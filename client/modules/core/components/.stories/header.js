import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Header from '../header';

storiesOf('core.Header', module)
  .add('default view', () => {
    return (
      <Header />
    );
  });
