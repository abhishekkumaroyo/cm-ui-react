/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import ContentMenu from '../../components/ContentMenu';

class ChannelsBody extends Component {
    render() {
        return (
            <div>
                <ContentMenu title="Channels"></ContentMenu>
            </div>
        );
    }
}

export default ChannelsBody;
