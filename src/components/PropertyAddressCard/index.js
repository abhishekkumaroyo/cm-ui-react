import React, { useEffect, useState } from 'react';
import { DataContent, DataName } from './styles';

export default function PropertyAddressCard(props) {
    const [propertyAddress, setPropertyAddress] = useState({});

    useEffect(() => {
        if (Object.prototype.hasOwnProperty.call(props.property, 'locationInfo')) {
            let tempObject = {};
            const locationInfo = props.property.locationInfo;
            if (Object.prototype.hasOwnProperty.call(locationInfo, 'geoLocation')) {
                tempObject['Latitude'] = locationInfo.geoLocation.latitude;
                tempObject['Longitude'] = locationInfo.geoLocation.longitude;
            }
            if (locationInfo.physicalLocation && locationInfo.physicalLocation.address) {
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
    }, [props.propertySearch]);

    return (
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
    );
}
