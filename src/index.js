import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import MapStore from './stores/MapStore';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='search' component={SearchPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
