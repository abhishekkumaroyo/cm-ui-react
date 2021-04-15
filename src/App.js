import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './desktop-containers/Dashboard';

const App = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />;
    </Switch>
);

export default App;
