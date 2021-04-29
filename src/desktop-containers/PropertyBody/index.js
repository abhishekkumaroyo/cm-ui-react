/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import { connect } from 'react-redux';

import ContentMenu from '../../components/ContentMenu';
import Searchbar from '../../components/Searchbar';
import { SearchError, PropertyColumn, StyledImage } from './styles';
import PropertyCard from '../../components/PropertyCard';

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

                <PropertyColumn>
                    {this.props.home.property ? (
                        <PropertyCard title="Property Info">
                            <div>Property name: {this.props.home.property.propertyName}</div>
                            <div>Property Id: {this.props.home.property.propertyId}</div>
                            <div>Property url: {this.props.home.property.propertyUrl}</div>
                        </PropertyCard>
                    ) : (
                        <PropertyCard title="Property Info">Enter correct property id</PropertyCard>
                    )}
                </PropertyColumn>
                <PropertyColumn>
                    {this.props.home.property ? (
                        <div>
                            <PropertyCard title="Property mappings">
                                {this.props.home.mapping.map((item, index) => (
                                    <div key={index}>
                                        {' '}
                                        <span>cmId: {item.cmId} | </span> <span>cmHotelId: {item.cmHotelId} | </span>
                                    </div>
                                ))}
                            </PropertyCard>
                            <PropertyCard title="Property images">
                                {this.props.home.property.content.images.map((item, index) => (
                                    <span key={index}>
                                        {/* <StyledImage src={item.url} /> */}
                                        <StyledImage src={item.url} />
                                    </span>
                                ))}
                            </PropertyCard>
                        </div>
                    ) : null}
                </PropertyColumn>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    home: state.home
});

export default connect(mapStateToProps)(PropertyBody);
