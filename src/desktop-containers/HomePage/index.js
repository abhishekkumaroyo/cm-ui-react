/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import BookingsBody from '../BookingsBody/index.js';
import ChannelsBody from '../ChannelsBody/index.js';
import DashboardBody from '../DashboardBody/index.js';
import InventoryBody from '../InventoryBody/index.js';
import PricingBody from '../PricingBody/index.js';
import PropertyBody from '../PropertyBody/index.js';
import RatePlansBody from '../RatePlansBody/index.js';
import Sidebar from '../../components/Sidebar/index.js';
import Navbar from '../../components/Navbar/index.js';
import { BodyContainer, MainContainer } from './styles.js';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <BodyContainer>
                <Navbar />
                <Sidebar />
                <MainContainer>
                    <Switch>
                        <Route path="/" exact component={DashboardBody} />
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

export default HomePage;
