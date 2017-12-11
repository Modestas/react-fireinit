import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingSpinner from 'components/LoadingSpinner';

const AsyncHome = Loadable({
  loader: () => import('./Home/containers'),
  loading: LoadingSpinner
});
const AsyncNotFound = Loadable({
  loader: () => import('./NotFound'),
  loading: LoadingSpinner
});

export default () =>
  <Switch>
    <Route path="/" exact component={AsyncHome}/>
    <Route component={AsyncNotFound}/>
  </Switch>;