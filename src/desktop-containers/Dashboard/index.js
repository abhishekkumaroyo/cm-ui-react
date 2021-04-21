/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import BookingsBody from '../../components/BookingsBody/index.js';
import ChannelsBody from '../../components/ChannelsBody/index.js';
import DashboardBody from '../../components/DashboardBody/index.js';
import InventoryBody from '../../components/InventoryBody/index.js';
import PricingBody from '../../components/PricingBody/index.js';
import PropertyBody from '../../components/PropertyBody/index.js';
import RatePlansBody from '../../components/RatePlansBody/index.js';
import Sidebar from '../../components/Sidebar/index.js';
import { BodyContainer, MainContainer } from './styles.js';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <BodyContainer>
                <Sidebar />
                <MainContainer>
                    <Switch>
                        <Route path="/dashboard" component={DashboardBody} />

                        <Route path="/bookings" component={BookingsBody} />
                        <Route path="/property" component={PropertyBody} />
                        <Route path="/inventory" component={InventoryBody} />
                        <Route path="/pricing" component={PricingBody} />
                        <Route path="/rateplans" component={RatePlansBody} />
                        <Route path="/channels" component={ChannelsBody} />
                    </Switch>
                </MainContainer>
            </BodyContainer>
        );
    }
}

export default Dashboard;
