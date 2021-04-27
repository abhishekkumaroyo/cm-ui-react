/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import ContentMenu from '../../components/ContentMenu';

//import {} from './styles.js';

class BookingsBody extends Component {
    render() {
        return (
            <div>
                <ContentMenu title="Bookings"></ContentMenu>
            </div>
        );
    }
}

export default BookingsBody;
