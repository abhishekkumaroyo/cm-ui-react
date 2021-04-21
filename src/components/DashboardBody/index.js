/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import {} from '../Icons/icons.js';

import ContentMenu from '../ContentMenu';
import Button from '../Button/index.js';

//import {} from './styles.js';

class DashboardBody extends Component {
    addRoom = () => {
        console.log('add room');
    };

    addPhoto = () => {
        console.log('add photo');
    };

    render() {
        return (
            <div>
                <ContentMenu title="Dashboard">
                    <Button message="Add a Room" onButtonClick={this.addRoom} type="white" />
                    <Button message="Add a photo" onButtonClick={this.addPhoto} />
                </ContentMenu>
            </div>
        );
    }
}

export default DashboardBody;
