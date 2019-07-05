import React from 'react';
import '~/config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#08f" />
    <Routes />
  </Provider>
);

export default App;
