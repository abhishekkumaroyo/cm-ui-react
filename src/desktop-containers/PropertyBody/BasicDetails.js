/* eslint-disable no-prototype-builtins */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Button from '../../components/Button';

import PropertyCard from '../../components/PropertyCard';

import { PropertyColumn, StyledImage } from './styles';
import { DataContent, DataName, BasicDetailsColumn, ShowMapButton } from './stylesBasicDetails';

import { getcmName } from '../../utils/helper';

export default function BasicDetails(props) {
    //let contactInfos = [];
    //const [propertyInfo, setPropertyInfo] = useState({});
    const [contactInfos, setContactInfos] = useState([]);
    const [propertyInstructions, setPropertyInstructions] = useState([]);
    const [propertyAddress, setPropertyAddress] = useState({});

    //let propertyAddress = {};

    useEffect(() => {
        if (props.propertySearch.property) {
            const property = props.propertySearch.property;
            //console.log(getcmName(5));
            if (property.content && property.content.contactInfos) {
                setContactInfos(property.content.contactInfos);
            }
            if (property.rules && property.rules.propertyInstructions) {
                setPropertyInstructions(property.rules.propertyInstructions);
            }

            if (Object.prototype.hasOwnProperty.call(property, 'locationInfo')) {
                let tempObject = {};
                const locationInfo = property.locationInfo;
                if (Object.prototype.hasOwnProperty.call(locationInfo, 'geoLocation')) {
                    tempObject['Latitude'] = locationInfo.geoLocation.latitude;
                    tempObject['Longitude'] = locationInfo.geoLocation.longitude;
                }
                if (locationInfo.hasOwnProperty('physicalLocation') && locationInfo.physicalLocation.hasOwnProperty('address')) {
                    const physicalAddress = locationInfo.physicalLocation.address;
                    tempObject['Line 1'] = physicalAddress.line1;
                    tempObject['Line 2'] = physicalAddress.line2;
                    tempObject['City'] = physicalAddress.city;
                    tempObject['State'] = physicalAddress.state;
                    tempObject['Postal Code'] = physicalAddress.postalCode;
                    tempObject['Country Code'] = physicalAddress.countryCode;
                }
                setPropertyAddress(tempObject);
            }
        }
    }, [props.propertySearch]);

    return (
        <div>
            <BasicDetailsColumn>
                {props.propertySearch.property ? (
                    <div>
                        <PropertyCard title="Property Info">
                            <table>
                                <tbody>
                                    <tr>
                                        <DataName>Property Name</DataName>
                                        <DataContent>
                                            {Object.prototype.hasOwnProperty.call(props.propertySearch.property, 'propertyName')
                                                ? `${props.propertySearch.property.propertyName}`
                                                : 'NA'}
                                        </DataContent>
                                    </tr>
                                    <tr>
                                        <DataName>Property Id</DataName>
                                        <DataContent>
                                            {props.propertySearch.property.propertyId ? `${props.propertySearch.property.propertyId}` : 'NA'}
                                        </DataContent>
                                    </tr>
                                    <tr>
                                        <DataName>Property URL</DataName>
                                        <DataContent>
                                            {props.propertySearch.property.propertyUrl ? `${props.propertySearch.property.propertyUrl}` : 'NA'}
                                        </DataContent>
                                    </tr>
                                    <tr>
                                        <DataName>Property sp</DataName>
                                        <DataContent>
                                            {props.propertySearch.property.propertySp ? `${props.propertySearch.property.propertySp}` : 'NA'}
                                        </DataContent>
                                    </tr>
                                </tbody>
                            </table>
                        </PropertyCard>

                        <PropertyCard title="Property Address">
                            <table>
                                <tbody>
                                    {Object.keys(propertyAddress).map((info, index) => (
                                        <tr key={index}>
                                            <DataName>{info}</DataName>
                                            <DataContent>{propertyAddress[info]}</DataContent>
                                        </tr>
                                    ))}
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
                    </div>
                ) : (
                    <PropertyCard title="Property Info">Enter correct property id</PropertyCard>
                )}
            </BasicDetailsColumn>
            <BasicDetailsColumn>
                {props.propertySearch.property ? (
                    <div>
                        <PropertyCard title="Property mappings">
                            {props.propertySearch.mapping.map((item, index) => (
                                <div key={index}>
                                    <span>cmId: {item.cmId} | </span> <span>cmHotelId: {item.cmHotelId} | </span>
                                </div>
                            ))}
                        </PropertyCard>
                        <PropertyCard title="Property images">
                            {props.propertySearch.property.content.images.map((item, index) => (
                                <span key={index}>
                                    <StyledImage src={item.url} />
                                </span>
                            ))}
                            <Link to="/property/images">
                                <div>view more</div>
                            </Link>
                        </PropertyCard>

                        <PropertyCard title="Rules">
                            {propertyInstructions.map((instr, index) => (
                                <div key={index} style={{ marginBottom: '10px' }}>
                                    <h5 style={{ display: 'inline' }}>{index + 1}.) &emsp; </h5>
                                    <div style={{ display: 'inline-grid' }}>
                                        {Object.keys(instr).map((instructionKey, instructionIndex) => (
                                            <div key={instructionIndex}>
                                                <span>{instructionKey} : </span>
                                                <span>{instr[instructionKey]}</span>
                                                <br />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </PropertyCard>
                    </div>
                ) : null}
            </BasicDetailsColumn>
        </div>
    );
}
