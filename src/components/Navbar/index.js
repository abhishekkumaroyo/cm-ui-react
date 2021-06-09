import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookingsBody from '../../desktop-containers/BookingsBody/index.js';
import { BookingsIcon } from '../Icons/icons.js';
import {
    IconContainer,
    NavbarContainer,
    NavLeft,
    NavRight,
    TextContainer,
    MenuDisplay,
    AlertIcon,
    NotificationIcon,
    PropertySearchBar,
    DropDownMenu,
    WelcomeContainer
} from './styles.js';

import { logoutAction } from '../../actions/authActions';
import Button from '../Button/index.js';

class Navbar extends Component {
    logoutClick = (e) => {
        e.preventDefault();
        this.props.logoutAction();
    };

    render() {
        return (
            <NavbarContainer>
                <NavLeft>
                    <MenuDisplay />
                    <TextContainer>Channel Manager</TextContainer>
                </NavLeft>

                {/* <div> welcome {this.props.login.userData.username}</div> */}
                <NavRight>
                    <WelcomeContainer>Welcome {this.props.login.userData.username}</WelcomeContainer>
                    <Button message="Logout" onButtonClick={this.logoutClick} />
                </NavRight>
            </NavbarContainer>
        );
    }
}

// export default Navbar;
const mapStateToProps = (state) => ({
    login: state.login
});

export default connect(mapStateToProps, { logoutAction })(Navbar);
