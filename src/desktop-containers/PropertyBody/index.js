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
import Pictures from './Images';
import Contact from './Contact';
import Policies from './Policies';
import Amenities from './Amenities';
import Unit from './Unit';

class PropertyBody extends Component {
    componentDidMount() {}

    render() {
        const ErrorMessage = <SearchError>{this.props.propertySearch.searchErrorMessage}</SearchError>;

        return (
            <div>
                <ContentMenu title="Property">
                    <Searchbar>{this.props.propertySearch.searchError ? ErrorMessage : null}</Searchbar>
                </ContentMenu>

                <ContentNav />

                <Switch>
                    <Route exact path="/property">
                        <BasicDetails propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
                    </Route>

                    <Route path="/property/basic">
                        <BasicDetails propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
                    </Route>

                    <Route path="/property/images">
                        <Pictures propertySearch={this.props.propertySearch} />
                    </Route>

                    <Route path="/property/room">
                        <div>room</div>
                    </Route>

                    <Route path="/property/contact">
                        <Contact propertySearch={this.props.propertySearch} />
                    </Route>

                    <Route path="/property/policies">
                        <Policies propertySearch={this.props.propertySearch} />
                    </Route>

                    <Route path="/property/amenities">
                        <Amenities propertySearch={this.props.propertySearch} />
                    </Route>

                    <Route path="/property/unit">
                        <Unit propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
                    </Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    home: state.home,
    propertySearch: state.propertySearch,
    propertyLanguage: state.propertyLanguage
});

export default connect(mapStateToProps)(PropertyBody);
