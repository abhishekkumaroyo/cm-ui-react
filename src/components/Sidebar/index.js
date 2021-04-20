/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BookingsIcon, DashboardIcon, PropertyIcon, InventoryIcon, PricingIcon, RatePlansIcon, ChannelsIcon } from '../Icons/icons.js';
import { IconContainer, SidebarContainer, SidebarContent, TextContainer } from './styles.js';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, NavLink } from 'react-router-dom';
import './style.scss';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //menuItem: 'dashboard'
        };
    }

    render() {
        return (
            <SidebarContainer>
                <NavLink
                    to="/dashboard"
                    style={{ textDecoration: 'none' }}
                    activeStyle={{
                        fontWeight: 'bold',
                        backgroundColor: 'rgb(254, 238, 237)',
                        color: 'rgb(238, 42, 36)',
                        boxShadow: 'rgb(238 42 36) 3px 0px inset'
                    }}>
                    <SidebarContent>
                        <IconContainer>
                            <DashboardIcon />
                        </IconContainer>
                        <TextContainer>Dashboard</TextContainer>
                    </SidebarContent>
                </NavLink>

                <NavLink to="/property" style={{ textDecoration: 'none' }}>
                    <SidebarContent>
                        <IconContainer>
                            <PropertyIcon />
                        </IconContainer>
                        <TextContainer>Property</TextContainer>
                    </SidebarContent>
                </NavLink>

                <Link to="/bookings" style={{ textDecoration: 'none' }} activeStyle>
                    <SidebarContent>
                        <IconContainer>
                            <BookingsIcon />
                        </IconContainer>
                        <TextContainer>Bookings</TextContainer>
                    </SidebarContent>
                </Link>
                <Link to="/inventory" style={{ textDecoration: 'none' }}>
                    <SidebarContent>
                        <IconContainer>
                            <InventoryIcon />
                        </IconContainer>
                        <TextContainer>Inventory</TextContainer>
                    </SidebarContent>
                </Link>

                <Link to="/pricing" style={{ textDecoration: 'none' }}>
                    <SidebarContent>
                        <IconContainer>
                            <PricingIcon />
                        </IconContainer>
                        <TextContainer>Pricing</TextContainer>
                    </SidebarContent>{' '}
                </Link>

                <Link to="/rateplans" style={{ textDecoration: 'none' }}>
                    <SidebarContent>
                        <IconContainer>
                            <RatePlansIcon />
                        </IconContainer>
                        <TextContainer>Rate Plans</TextContainer>
                    </SidebarContent>
                </Link>

                <Link to="/channels" style={{ textDecoration: 'none' }}>
                    <SidebarContent>
                        <IconContainer>
                            <ChannelsIcon />
                        </IconContainer>
                        <TextContainer>Channels</TextContainer>
                    </SidebarContent>
                </Link>
            </SidebarContainer>
        );
    }
}

export default Sidebar;
