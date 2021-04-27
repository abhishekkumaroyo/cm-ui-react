/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import { connect } from 'react-redux';

import ContentMenu from '../../components/ContentMenu';
import Searchbar from '../../components/Searchbar';
import { SearchError } from './styles';

class PropertyBody extends Component {
    componentDidMount() {
        // console.log('comp');
        // console.log(this.props.home.property.name);
    }

    render() {
        const ErrorMessage = <SearchError>{this.props.home.searchErrorMessage}</SearchError>;

        return (
            <div>
                <ContentMenu title="Property"></ContentMenu>

                <Searchbar>{this.props.home.searchError ? ErrorMessage : null}</Searchbar>
                <div>{`${this.props.home.property ? this.props.home.property.name : 'enter property id'}`}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    home: state.home
});

export default connect(mapStateToProps)(PropertyBody);
