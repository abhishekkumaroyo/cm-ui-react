/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import ContentMenu from '../../components/ContentMenu';

class PricingBody extends Component {
    render() {
        return (
            <div>
                <ContentMenu title="Pricing"></ContentMenu>
            </div>
        );
    }
}

export default PricingBody;
