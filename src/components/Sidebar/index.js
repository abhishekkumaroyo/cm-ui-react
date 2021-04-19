/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BookingsIcon, DashboardIcon, PropertyIcon, InventoryIcon, PricingIcon, RatePlansIcon, ChannelsIcon } from '../Icons/icons.js';
import { IconContainer, SidebarContainer, SidebarContent, TextContainer } from './styles.js';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <SidebarContainer>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                    <SidebarContent>
                        <IconContainer>
                            <DashboardIcon />
                        </IconContainer>
                        <TextContainer>Dashboard</TextContainer>
                    </SidebarContent>
                </Link>

                <Link to="/property" style={{ textDecoration: 'none' }}>
                    <SidebarContent>
                        <IconContainer>
                            <PropertyIcon />
                        </IconContainer>
                        <TextContainer>Property</TextContainer>
                    </SidebarContent>
                </Link>

                <Link to="/bookings" style={{ textDecoration: 'none' }}>
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
