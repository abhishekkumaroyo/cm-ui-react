import React, { useEffect, useState } from 'react';

import PropertyAmenitiesCard from '../../components/PropertyAmenitiesCard';
import PropertyCard from '../../components/PropertyCard';
import PropertyDetailsCard from '../../components/PropertyDetailsCard';
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

    const temp = {
        parentId: 'AT-4824-10',
        unitExternalID: 'AT-4824-101',
        type: 'BASEMENT',
        subType: 'TWIN',
        sellable: false,
        commonSpace: false,
        description: {
            name: {
                texts: [
                    {
                        value: 'dog',
                        languageCode: 'en'
                    },
                    {
                        value: 'perro',
                        languageCode: 'es'
                    }
                ]
            },
            summary: {
                texts: [
                    {
                        value: 'name',
                        languageCode: 'en'
                    },
                    {
                        value: 'spanish name',
                        languageCode: 'es'
                    }
                ]
            },
            headline: {
                texts: [
                    {
                        value: 'name',
                        languageCode: 'en'
                    }
                ]
            },
            directions: {
                texts: [
                    {
                        value: 'name',
                        languageCode: 'en'
                    }
                ]
            },
            ownerInfo: {
                texts: [
                    {
                        value: 'name',
                        languageCode: 'en'
                    }
                ]
            },
            guestAccess: {
                texts: [
                    {
                        value: 'name',
                        languageCode: 'en'
                    }
                ]
            },
            guestBookMessage: {
                texts: [
                    {
                        value: 'name',
                        languageCode: 'en'
                    }
                ]
            },
            additionalHouseRules: {
                texts: [
                    {
                        value: 'name',
                        languageCode: 'en'
                    }
                ]
            }
        }
    };

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
    }, [unitNumberOne, unitNumberTwo, props.language]);

    if (!props.propertySearch.property) {
        return <PropertyCard title="UNIT">Enter correct property id</PropertyCard>;
    }

    return (
        <div>
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
            <div>
                <PropertyColumn>
                    <PropertyCard title="Unit Info">
                        <PropertyDetailsCard property={temp} language={props.language}></PropertyDetailsCard>
                    </PropertyCard>
                </PropertyColumn>

                <PropertyColumn>
                    <PropertyCard title="Images">
                        <PropertyImagesCard property={unit} />
                    </PropertyCard>
                    <PropertyCard title="Amenities">
                        <PropertyAmenitiesCard property={unit} />
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
