import React from 'react';
import { Switch, Route } from 'react-router';
import Landing from './components/Landing';
import Home from './components/Home';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route  path="/home" component={Home} />
    </Switch>
  )
}

export default Router;