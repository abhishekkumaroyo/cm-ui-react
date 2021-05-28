import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import PropertyDetailsCard from '../../components/PropertyDetailsCard';
import PropertyPoliciesCard from '../../components/PropertyPoliciesCard';
import { BasicDetailsColumn } from './stylesBasicDetails';

export default function Unit(props) {
    const [unit, setUnit] = useState(0);

    const selectUnit = (unit) => {
        setUnit(unit);
    };

    return (
        <div>
            <PropertyCard title="Units available">
                {props.propertySearch.property.units.map((unit, ind) => (
                    <div key={ind} onClick={() => selectUnit(ind)}>
                        {unit.type}
                    </div>
                ))}
            </PropertyCard>
            <div>
                <BasicDetailsColumn>
                    <PropertyCard title="Unit Info">
                        <PropertyDetailsCard property={props.propertySearch.property.units[unit]}></PropertyDetailsCard>
                    </PropertyCard>
                </BasicDetailsColumn>
                <BasicDetailsColumn>
                    <PropertyCard title="Policies">
                        <PropertyPoliciesCard property={props.propertySearch.property.units[unit]}></PropertyPoliciesCard>
                    </PropertyCard>
                    <PropertyCard title="Rules">
                        <PropertyPoliciesCard property={props.propertySearch.property.units[unit]}></PropertyPoliciesCard>
                    </PropertyCard>
                </BasicDetailsColumn>
            </div>
        </div>
    );
}
