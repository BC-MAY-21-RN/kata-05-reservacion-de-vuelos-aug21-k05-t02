import React from 'react';
import {useGoogleServices} from './src/library/hooks';
import Navigation from './src/navigators';

const App = () => {
  useGoogleServices();
  return <Navigation />;
};

export default App;
