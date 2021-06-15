import { Switch, Route } from 'react-router-dom';
import Login from './desktop-containers/Login';
import HomePage from './desktop-containers/HomePage';
import './App.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

export class App extends Component {
    render() {
        // if (!this.props.login.loggedIn) {
        //     return <Login />;
        // }
        return (
            <Switch>
                <Route path="/" component={HomePage} />;
            </Switch>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.login
});

export default connect(mapStateToProps, {})(App);
