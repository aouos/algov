import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './styles/index.less';
import Home from 'pages/home';

ReactDOM.render(
  <HashRouter>
    <Home />
  </HashRouter>,
  document.getElementById('root'),
);
