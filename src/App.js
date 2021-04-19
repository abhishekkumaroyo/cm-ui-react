import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './desktop-containers/Dashboard';

function App() {
    const [token, setToken] = useState(false);

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
