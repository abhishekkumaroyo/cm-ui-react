import React, { useEffect, useState } from 'react';
import PropertyAmenitiesCard from '../../components/PropertyAmenitiesCard';
import PropertyCard from '../../components/PropertyCard';
import PropertyHeader from '../../components/PropertyHeader';
import { UnitName } from './stylesUnit';

export default function Amenities(props) {
    const [unitNumberOne, setUnitNumberOne] = useState(0);
    const [unitNumberTwo, setUnitNumberTwo] = useState(-1);
    const [unit, setUnit] = useState({});

    const selectUnitOne = (unit) => {
        setUnitNumberOne(unit);
        setUnitNumberTwo(-1);
    };

    const selectUnitTwo = (unit) => {
        setUnitNumberTwo(unit);
    };

    useEffect(() => {
        if (props.propertySearch.property) {
            if (unitNumberTwo == -1) {
                setUnit(props.propertySearch.property.units[unitNumberOne]);
            } else {
                setUnit(props.propertySearch.property.units[unitNumberOne].units[unitNumberTwo]);
            }
        }
    }, [unitNumberOne, unitNumberTwo]);

    if (!props.propertySearch.property) {
        return <PropertyCard title="Amenities">Enter correct property id</PropertyCard>;
    }

    return (
        <div>
            <PropertyHeader
                title="Amenities"
                language={props.language}
                id={props.propertySearch.property.externalPropertyId}
                propertyLanguages={props.propertySearch.property.languageCodes}>
                <PropertyCard title="View Amenities of">
                    <div>
                        <b>Level 1: </b>
                        <br />
                        {props.propertySearch.property.units.map((unit, ind) => (
                            <UnitName key={ind} onClick={() => selectUnitOne(ind)} selected={ind == unitNumberOne}>
                                {unit.type}
                            </UnitName>
                        ))}
                        <br />
                        <br />
                    </div>
                    <div>
                        <b>Level 2: </b>
                        <br />
                        {props.propertySearch.property.units[unitNumberOne].units
                            ? props.propertySearch.property.units[unitNumberOne].units.map((unit, ind) => (
                                  <UnitName key={ind} onClick={() => selectUnitTwo(ind)} selected={ind == unitNumberTwo}>
                                      {unit.type}
                                  </UnitName>
                              ))
                            : null}
                    </div>
                </PropertyCard>
            </PropertyHeader>

            <PropertyCard title="Unit Amenities">
                <PropertyAmenitiesCard property={unit} full={true} language={props.language} />
            </PropertyCard>
            <PropertyCard title="Property Amenities">
                <PropertyAmenitiesCard property={props.propertySearch.property} full={true} language={props.language} />
            </PropertyCard>
        </div>
    );
}
