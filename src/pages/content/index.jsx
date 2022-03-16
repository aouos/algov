import React, { memo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from 'routes';

import './style.less';

const prefix = 'content';

const AContent = memo(() => {
  return (
    <div className={`${prefix}`}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/start" />} />
        {renderRoutes(routes)}
      </Switch>
    </div>
  );
});

export default AContent;
