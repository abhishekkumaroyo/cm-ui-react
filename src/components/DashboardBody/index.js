/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import {} from '../Icons/icons.js';

import ContentMenu from '../ContentMenu';

//import {} from './styles.js';

class DashboardBody extends Component {
    render() {
        return (
            <div>
                <ContentMenu />
                <span></span>
            </div>
        );
    }
}

export default DashboardBody;
