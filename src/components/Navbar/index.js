import React, { Component } from 'react';
import {
    NavLeft,
    NavRight,
    IconContainer,
    NavbarContainer,
    TextContainer,
    MenuDisplay,
    AlertIcon,
    NotificationIcon,
    PropertySearchBar,
    DropDownMenu
} from './styles.js';

import Button from '../Button/index.js';
//import { logoutAction } from '../../actions/authActions';

class Navbar extends Component {
    render() {
        return (
            <NavbarContainer>
                <NavLeft>
                    <MenuDisplay />
                    <TextContainer>Channel Manager</TextContainer>
                </NavLeft>

                <NavRight>
                    <Button message="Logout" onButtonClick={this.logoutClick} />
                </NavRight>
            </NavbarContainer>
        );
    }
}

export default Navbar;
