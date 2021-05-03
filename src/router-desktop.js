import React from 'react';

import { Router, Route, browserHistory } from 'react-router';
import { withCookies } from 'react-cookie';
import routes from './routes-desktop';

const RouterMain = ({ store }) => <Router history={browserHistory} routes={routes} />;

export default withCookies(RouterMain);
