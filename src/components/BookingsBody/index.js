/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import ContentMenu from '../ContentMenu/index.js';

import { BookingsIcon } from '../Icons/icons.js';

//import {} from './styles.js';

class BookingsBody extends Component {
    render() {
        return (
            <div>
                <ContentMenu title="Bookings" />
                <span></span>
            </div>
        );
    }
}

export default BookingsBody;
