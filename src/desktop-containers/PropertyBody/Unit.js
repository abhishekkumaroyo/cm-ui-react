import React, { useEffect, useState } from 'react';

import PropertyAmenitiesCard from '../../components/PropertyAmenitiesCard';
import PropertyCard from '../../components/PropertyCard';
import PropertyDetailsCard from '../../components/PropertyDetailsCard';
import PropertyHeader from '../../components/PropertyHeader';
import PropertyImagesCard from '../../components/PropertyImagesCard';
import PropertyInstructionsCard from '../../components/PropertyInstructionsCard';
import PropertyPoliciesCard from '../../components/PropertyPoliciesCard';
import PropertyRulesCard from '../../components/PropertyRulesCard';

import { PropertyColumn } from './styles';
import { UnitName } from './stylesUnit';

export default function Unit(props) {
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

    if (!props.propertySearch.property || !unit.parentId) {
        return <PropertyCard title="UNIT">Enter correct property id</PropertyCard>;
    }

    return (
        <div>
            <PropertyHeader
                title="Unit Details"
                language={props.language}
                id={props.propertySearch.property.externalPropertyId}
                propertyLanguages={props.propertySearch.property.languageCodes}>
                <PropertyCard title="Units available (select any unit and any sub-unit)">
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
            <div>
                <PropertyColumn>
                    <PropertyCard title="Unit Info">
                        <PropertyDetailsCard property={unit} language={props.language}></PropertyDetailsCard>
                    </PropertyCard>
                </PropertyColumn>

                <PropertyColumn>
                    <PropertyCard title="Images">
                        <PropertyImagesCard property={unit} />
                    </PropertyCard>
                    <PropertyCard title="Amenities">
                        <PropertyAmenitiesCard property={unit} language={props.language} />
                    </PropertyCard>
                    <PropertyCard title="Policies (select a policy)">
                        <PropertyPoliciesCard property={unit} />
                    </PropertyCard>
                    <PropertyCard title="Rules">
                        <PropertyRulesCard property={unit} />
                    </PropertyCard>
                    <PropertyCard title="Instructions">
                        <PropertyInstructionsCard property={unit} />
                    </PropertyCard>
                </PropertyColumn>
            </div>
        </div>
    );
}