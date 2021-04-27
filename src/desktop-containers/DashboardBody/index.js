/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import {} from '../../components/Icons/icons.js';

import ContentMenu from '../../components/ContentMenu';
import Button from '../../components/Button/index.js';
import Searchbar from '../../components/Searchbar/index.js';

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
                {/* <Searchbar /> */}
            </div>
        );
    }
}

export default DashboardBody;
