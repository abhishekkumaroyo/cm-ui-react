import React from 'react';

import PropertyCard from '../../components/PropertyCard';

import { PropertyColumn, StyledImage } from './styles';

export default function BasicDetails(props) {
    return (
        <div>
            <PropertyColumn>
                {props.home.property ? (
                    <PropertyCard title="Property Info">
                        <div>Property name: {props.home.property.propertyName}</div>
                        <div>Property Id: {props.home.property.propertyId}</div>
                        <div>Property url: {props.home.property.propertyUrl}</div>
                    </PropertyCard>
                ) : (
                    <PropertyCard title="Property Info">Enter correct property id</PropertyCard>
                )}
            </PropertyColumn>
            <PropertyColumn>
                {props.home.property ? (
                    <div>
                        <PropertyCard title="Property mappings">
                            {props.home.mapping.map((item, index) => (
                                <div key={index}>
                                    {' '}
                                    <span>cmId: {item.cmId} | </span> <span>cmHotelId: {item.cmHotelId} | </span>
                                </div>
                            ))}
                        </PropertyCard>
                        <PropertyCard title="Property images">
                            {props.home.property.content.images.map((item, index) => (
                                <span key={index}>
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
