import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import LoadingSpinner from 'components/LoadingSpinner';
import withTracker from 'components/withTracker';

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
    <Route path="/" exact component={withTracker(AsyncHome)}/>
    <Route component={withTracker(AsyncNotFound)}/>
  </Switch>;