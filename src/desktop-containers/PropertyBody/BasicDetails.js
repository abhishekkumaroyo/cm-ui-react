/* eslint-disable no-prototype-builtins */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Button from '../../components/Button';

import PropertyCard from '../../components/PropertyCard';

import { PropertyColumn, StyledImage, TableDataName, TableDataContent, Language, LanguageRow } from './styles';
import { DataContent, DataName, BasicDetailsColumn, ShowMapButton } from './stylesBasicDetails';

import { camelCaseToSentenceCase, getcmName, displayObjectValue } from '../../utils/helper';
import PropertyDetails from '../../components/PropertyDetailsCard';
import PropertyAddressCard from '../../components/PropertyAddressCard';
import PropertyPoliciesCard from '../../components/PropertyPoliciesCard';
import PolicyDisplay from '../../components/PolicyDisplay';
import PropertyInstructionsCard from '../../components/PropertyInstructionsCard';
import PropertyRulesCard from '../../components/PropertyRulesCard';
import PropertyImagesCard from '../../components/PropertyImagesCard';
import PropertyAmenitiesCard from '../../components/PropertyAmenitiesCard';

import { languages } from '../../constants/languages';
import PropertyHeader from '../../components/PropertyHeader';

// import {changeLanguage} from '../../actions/propertyLanguageAction';

export default function BasicDetails(props) {
    const [contactInfos, setContactInfos] = useState([]);
    const [propertyInstructions, setPropertyInstructions] = useState([]);
    const [propertyAddress, setPropertyAddress] = useState({});

    useEffect(() => {
        if (props.propertySearch.property) {
            const property = props.propertySearch.property;

            if (property.contactInfoList) {
                setContactInfos(property.contactInfoList);
            }
            if (property.rules && property.rules.propertyInstructions) {
                setPropertyInstructions(property.rules.propertyInstructions);
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

            <BasicDetailsColumn>
                <PropertyCard title="Property Info">
                    <PropertyDetails property={props.propertySearch.property} />
                </PropertyCard>

                <PropertyCard title="Property Address">
                    <table>
                        <tbody>
                            <PropertyAddressCard property={props.propertySearch.property} />
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
            </BasicDetailsColumn>
            <BasicDetailsColumn>
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
            </BasicDetailsColumn>
        </div>
    );
}
