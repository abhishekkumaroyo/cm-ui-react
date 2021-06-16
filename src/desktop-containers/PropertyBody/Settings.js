import React, { useState } from 'react';
import Button from '../../components/Button';
import PropertyCard from '../../components/PropertyCard';

export default function Settings(props) {
    // const [mappings, setMappings] = useState([]);

    // if (props.propertySearch.property && props.propertySearch.property.mappings) {
    //     setMappings(props.propertySearch.property.mappings);
    // }

    if (!props.propertySearch.property) {
        return <PropertyCard title="Settings">Enter correct property id</PropertyCard>;
    }

    return (
        <div>
            <PropertyCard title="Settings"></PropertyCard>
        </div>
    );
}
