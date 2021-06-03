/* eslint-disable no-prototype-builtins */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ShowMapButton } from './stylesBasicDetails';

import { getcmName } from '../../utils/helper';

import Button from '../../components/Button';
import PropertyDetailsCard from '../../components/PropertyDetailsCard';
import PropertyAddressCard from '../../components/PropertyAddressCard';
import PropertyPoliciesCard from '../../components/PropertyPoliciesCard';
import PropertyInstructionsCard from '../../components/PropertyInstructionsCard';
import PropertyRulesCard from '../../components/PropertyRulesCard';
import PropertyImagesCard from '../../components/PropertyImagesCard';
import PropertyAmenitiesCard from '../../components/PropertyAmenitiesCard';
import PropertyCard from '../../components/PropertyCard';
import PropertyHeader from '../../components/PropertyHeader';
import { PropertyColumn } from './styles';

export default function BasicDetails(props) {
    const [contactInfos, setContactInfos] = useState([]);

    const temp = {
        externalPropertyId: 'AT-4824-10',
        propertyType: 'BUNGALOW',
        hasMultipleSellableUnitsOrNot: true,
        currencyCode: 'EUR',
        languageCodes: ['en', 'de'],
        propertyDescriptions: {
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

    useEffect(() => {
        if (props.propertySearch.property) {
            const property = props.propertySearch.property;

            if (property.contactInfoList) {
                setContactInfos(property.contactInfoList);
            }
        }
    }, [props.propertySearch, props.language]);

    const getChannelName = (id) => {
        return getcmName(id);
    };

    if (!props.propertySearch.property) {
        return <PropertyCard title="Basic Details">Enter correct property id</PropertyCard>;
    }

    return (
        <div>
            <PropertyHeader language={props.language} />

            <PropertyColumn>
                <PropertyCard title="Property Info">
                    <PropertyDetailsCard property={temp} language={props.language} />
                </PropertyCard>

                <PropertyCard title="Property Address">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <PropertyAddressCard property={props.propertySearch.property} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <ShowMapButton>
                        <Button message={'Show / Hide Map'} type="white" />
                    </ShowMapButton>
                </PropertyCard>
                <PropertyCard title="Contact">
                    <div>Types of Contact Details:</div>
                    <br />
                    {contactInfos.length > 0 ? (
                        contactInfos.map((info, infoIndex) => (
                            <div key={infoIndex}>
                                {infoIndex + 1}.) {info.type}
                            </div>
                        ))
                    ) : (
                        <div>No Contact Info found</div>
                    )}
                    <Link to="/property/contact">
                        <br />
                        <div>View Full Contact Details</div>
                    </Link>
                </PropertyCard>
            </PropertyColumn>

            <PropertyColumn>
                <PropertyCard title="Property mappings">
                    {props.propertySearch.mapping.map((item, index) => (
                        <div key={index}>
                            <span>cmId: {item.cmId} | </span> <span>cmHotelId: {item.cmHotelId} | </span>
                            <div>{getChannelName(item.cmId).name}</div>
                        </div>
                    ))}
                </PropertyCard>
                <PropertyCard title="Property images">
                    <PropertyImagesCard property={props.propertySearch.property} />
                    <Link to="/property/images">
                        <div>view more</div>
                    </Link>
                </PropertyCard>
                <PropertyCard title="Amenities">
                    <PropertyAmenitiesCard property={props.propertySearch.property} />
                </PropertyCard>
                <PropertyCard title="Instructions">
                    <PropertyInstructionsCard property={props.propertySearch.property} />
                </PropertyCard>
                <PropertyCard title="Rules">
                    <PropertyRulesCard property={props.propertySearch.property} />
                </PropertyCard>
                <PropertyCard title="Policies (select a policy)">
                    <PropertyPoliciesCard property={props.propertySearch.property} />
                    <Link to="/property/policies">
                        <br />
                        <div>View Policy details</div>
                    </Link>
                </PropertyCard>
            </PropertyColumn>
        </div>
    );
}
