/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import {} from '../../components/Icons/icons.js';

import ContentMenu from '../../components/ContentMenu';

class InventoryBody extends Component {
    render() {
        return (
            <div>
                <ContentMenu title="Inventory"></ContentMenu>
            </div>
        );
    }
}

export default InventoryBody;
