/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import BodyContent from '../../components/BodyContent';

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { Redirect } from 'react-router';
//import Sidebar from '../../components/Sidebar';

class HomePage extends PureComponent {
    render() {
        return (
            <div>
                <BodyContent />
            </div>
        );
    }
}

export default HomePage;
