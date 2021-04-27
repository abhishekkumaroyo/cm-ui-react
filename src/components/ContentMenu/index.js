/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import {} from '../Icons/icons.js';

import { MenuContainer, MenuTitle, MenuItems } from './styles.js';

class ContentMenu extends Component {
    render() {
        return (
            <div>
                <MenuContainer>
                    <MenuTitle>{this.props.title}</MenuTitle>
                    <MenuItems>{this.props.children}</MenuItems>
                </MenuContainer>
            </div>
        );
    }
}

export default ContentMenu;
