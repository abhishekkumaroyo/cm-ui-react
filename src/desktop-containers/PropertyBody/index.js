/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import { connect } from 'react-redux';

import ContentMenu from '../../components/ContentMenu';
import Searchbar from '../../components/Searchbar';
import { SearchError, PropertyColumn, StyledImage } from './styles';
import PropertyCard from '../../components/PropertyCard';
import ContentNav from '../../components/ContentNav';
import BasicDetails from './BasicDetails';

class PropertyBody extends Component {
    componentDidMount() {
        // console.log('comp');
        // console.log(this.props.home.property.name);
        // console.log(this.props.home);
    }

    render() {
        const ErrorMessage = <SearchError>{this.props.home.searchErrorMessage}</SearchError>;

        return (
            <div>
                <ContentMenu title="Property">
                    <Searchbar>{this.props.home.searchError ? ErrorMessage : null}</Searchbar>
                </ContentMenu>

                <ContentNav />

                <Switch>
                    <Route path="/property/basic">
                        <BasicDetails home={this.props.home} />
                    </Route>

                    <Route path="/property/pictures">
                        <div>pictures</div>
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    home: state.home
});

export default connect(mapStateToProps)(PropertyBody);
