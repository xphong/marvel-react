import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './containers/App';
import Characters from './containers/Characters';
import Powerlevels from './containers/Powerlevels';
import About from './containers/About';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Characters}/>
    <Route path='about' component={About} />
    <Route path='powerlevels' component={Powerlevels} />
    <Route path='characters/:name' component={Characters} />
  </Route>
);

export default routes;
