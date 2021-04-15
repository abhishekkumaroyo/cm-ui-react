import React, { Component } from 'react';
import { BookingsIcon, DashboardIcon, PropertyIcon, InventoryIcon, PricingIcon, RatePlansIcon, ChannelsIcon } from '../Icons/icons.js';
import { IconContainer, SidebarContainer, SidebarContent, TextContainer } from './styles.js';

class Sidebar extends Component {
    render() {
        return (
            <SidebarContainer>
                <SidebarContent>
                    <IconContainer>
                        <DashboardIcon />
                    </IconContainer>
                    <TextContainer>Dashboard</TextContainer>
                </SidebarContent>

                <SidebarContent>
                    <IconContainer>
                        <PropertyIcon />
                    </IconContainer>
                    <TextContainer>Property</TextContainer>
                </SidebarContent>

                <SidebarContent>
                    <IconContainer>
                        <BookingsIcon />
                    </IconContainer>
                    <TextContainer>Bookings</TextContainer>
                </SidebarContent>

                <SidebarContent>
                    <IconContainer>
                        <InventoryIcon />
                    </IconContainer>
                    <TextContainer>Inventory</TextContainer>
                </SidebarContent>

                <SidebarContent>
                    <IconContainer>
                        <PricingIcon />
                    </IconContainer>
                    <TextContainer>Pricing</TextContainer>
                </SidebarContent>

                <SidebarContent>
                    <IconContainer>
                        <RatePlansIcon />
                    </IconContainer>
                    <TextContainer>Rate Plans</TextContainer>
                </SidebarContent>

                <SidebarContent>
                    <IconContainer>
                        <ChannelsIcon />
                    </IconContainer>
                    <TextContainer>Channels</TextContainer>
                </SidebarContent>

                {/* <SidebarContent>Property</SidebarContent>
                <SidebarContent>Bookings</SidebarContent>
                <SidebarContent>Inventory</SidebarContent>
                <SidebarContent>Pricing</SidebarContent>
                <SidebarContent>RatePlans</SidebarContent>
                <SidebarContent>Channels</SidebarContent> */}
            </SidebarContainer>
        );
    }
}

export default Sidebar;
