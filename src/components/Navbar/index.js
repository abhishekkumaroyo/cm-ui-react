import React, { Component } from 'react';
import {
    IconContainer,
    NavbarContainer,
    TextContainer,
    MenuDisplay,
    AlertIcon,
    NotificationIcon,
    PropertySearchBar,
    DropDownMenu
} from './styles.js';

class Navbar extends Component {
    render() {
        return (
            <NavbarContainer>
                <MenuDisplay />
                <TextContainer>Channel Manager</TextContainer>
                <AlertIcon />
                <NotificationIcon />
                <PropertySearchBar />
                <DropDownMenu />
            </NavbarContainer>
        );
    }
}

export default Navbar;
