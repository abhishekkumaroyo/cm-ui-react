/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, useHistory } from 'react-router-dom';

import { connect, useDispatch } from 'react-redux';

import ContentMenu from '../../components/ContentMenu';
import Searchbar from '../../components/Searchbar';
import { SearchError } from './styles';
import ContentNav from '../../components/ContentNav';
import BasicDetails from './BasicDetails';
import Images from './Images';
import Contact from './Contact';
import Policies from './Policies';
import Amenities from './Amenities';
import Unit from './Unit';
import MappingDetails from './MappingDetails';

import { searchAction } from '../../actions/propertySearchActions';

function PropertyBody(props) {
    let { propertyId } = useParams();

    const [property, setProperty] = useState();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (propertyId) {
            dispatch(searchAction({ searchInput: propertyId }));
        } else if (props.propertySearch.property && props.propertySearch.property.externalPropertyId) {
            history.push(`property/${props.propertySearch.property.externalPropertyId}`);
        }
    }, [propertyId]);

    const ErrorMessage = <SearchError>{props.propertySearch.searchErrorMessage}</SearchError>;

    return (
        <div>
            <ContentMenu title="Property">
                <Searchbar>{props.propertySearch.searchError ? ErrorMessage : null}</Searchbar>
            </ContentMenu>

            {propertyId ? <ContentNav propertyId={propertyId} /> : null}

            <Switch>
                <Route exact path={`/`}>
                    <BasicDetails propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>
                <Route exact path={`/property/:id/`}>
                    <BasicDetails propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>
                <Route exact path={`/property/:id/basic`}>
                    <BasicDetails propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/images`}>
                    <Images propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/mapping`}>
                    <MappingDetails propertySearch={props.propertySearch} />
                </Route>

                <Route exact path={`/property/:id/contact`}>
                    <Contact propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/policies`}>
                    <Policies propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/amenities`}>
                    <Amenities propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/unit`}>
                    <Unit propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => ({
    home: state.home,
    propertySearch: state.propertySearch,
    propertyLanguage: state.propertyLanguage
});

export default connect(mapStateToProps, {
    searchAction
})(PropertyBody);
