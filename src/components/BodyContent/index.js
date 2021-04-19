/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import BookingsBody from '../BookingsBody/index.js';
import DashboardBody from '../DashboardBody/index.js';

import {} from '../Icons/icons.js';
import Sidebar from '../Sidebar/index.js';
import { BodyContainer, MainContainer } from './styles.js';

class BodyContent extends Component {
    render() {
        return (
            <BodyContainer>
                <Sidebar />
                <MainContainer>
                    <Switch>
                        <Route path="/dashboard" component={DashboardBody} />
                        <Route path="/bookings" component={BookingsBody} />
                    </Switch>
                </MainContainer>
            </BodyContainer>
        );
    }
}

export default BodyContent;
