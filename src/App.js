import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './desktop-containers/Login';
import Dashboard from './desktop-containers/Dashboard';
import './App.scss';

function App() {
    const [token, setToken] = useState(true);

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <Switch>
            <Route path="/" component={Dashboard} />;
        </Switch>
    );
}

export default App;
