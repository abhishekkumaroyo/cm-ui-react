import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './desktop-containers/Login';
import HomePage from './desktop-containers/HomePage';
import './App.scss';

function App() {
    const [token, setToken] = useState(true);

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return (
        <Switch>
            <Route path="/" component={HomePage} />;
        </Switch>
    );
}

export default App;
