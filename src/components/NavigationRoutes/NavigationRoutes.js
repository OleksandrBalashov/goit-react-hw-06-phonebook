import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routers from '../../routers';

const NavigationRoutes = () => {
  return (
    <Switch>
      {routers.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component} key={path} />
      ))}
    </Switch>
  );
};

export default NavigationRoutes;
