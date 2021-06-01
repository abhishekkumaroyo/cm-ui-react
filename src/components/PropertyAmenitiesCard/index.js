import React, { useEffect, useState } from 'react';
import { displayObjectValue } from '../../utils/helper';

import { AmenityRow, AmenityRowItem } from './styles';

export default function PropertyAmenitiesCard(props) {
    const [propertyAmenities, setPropertyAmenities] = useState([]);

    useEffect(() => {
        if (props.property.amenities) {
            setPropertyAmenities(props.property.amenities);
        } else {
            setPropertyAmenities([]);
        }
    }, [props.property]);

    return (
        <div>
            <AmenityRow>
                <AmenityRowItem header={true}>Category</AmenityRowItem>
                {props.full ? <AmenityRowItem header={true}>Description</AmenityRowItem> : null}
                <AmenityRowItem header={true}>Quantity</AmenityRowItem>
                <AmenityRowItem header={true}>Associated Width</AmenityRowItem>
                {props.full ? <AmenityRowItem header={true}>Unit Ref</AmenityRowItem> : null}
                <AmenityRowItem header={true}>Price</AmenityRowItem>
                <AmenityRowItem header={true}>Floors</AmenityRowItem>
            </AmenityRow>

            {propertyAmenities.map((amenity, index) => (
                <AmenityRow key={index}>
                    <AmenityRowItem>{amenity.category}</AmenityRowItem>
                    {props.full ? <AmenityRowItem>{amenity.description}</AmenityRowItem> : null}
                    <AmenityRowItem>{amenity.quantity}</AmenityRowItem>
                    <AmenityRowItem>{amenity.associatedWith}</AmenityRowItem>
                    {props.full ? <AmenityRowItem>{amenity.unitReferenceId}</AmenityRowItem> : null}
                    <AmenityRowItem>{amenity.pricingInfo ? amenity.pricingInfo.price : 'NA'}</AmenityRowItem>

                    <AmenityRowItem>
                        {amenity.amenityLocation && amenity.amenityLocation.listOfFloors
                            ? displayObjectValue(amenity.amenityLocation.listOfFloors)
                            : 'NA'}
                    </AmenityRowItem>
                </AmenityRow>
            ))}
        </div>
    );
}
