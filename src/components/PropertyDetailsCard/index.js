import React, { useEffect, useState } from 'react';
import { camelCaseToSentenceCase, displayObjectValue } from '../../utils/helper';
import { DataContent, DataName, DescriptionIndex } from './styles';

export default function PropertyDetailsCard(props) {
    const [propertyDetails, setPropertyDetails] = useState({});
    const [propertyDescriptions, setPropertyDescriptions] = useState({});
    const [numberOfDesc, setNumberOfDesc] = useState([]);
    const [selectedDesc, setSelectedDesc] = useState(0);

    useEffect(() => {
        let infoObject = {};
        infoObject['externalPropertyId'] = props.property.externalPropertyId;
        infoObject['propertyType'] = props.property.propertyType;
        infoObject['hasMultipleSellableUnitsOrNot'] = props.property.hasMultipleSellableUnitsOrNot;
        infoObject['currencyCode'] = props.property.currencyCode;
        infoObject['languageCodes'] = props.property.languageCodes; // it is an array separate it
        setPropertyDetails(infoObject);

        let descriptions = {};
        if (props.property.propertyDescriptions && props.property.propertyDescriptions.length >= 1) {
            descriptions = props.property.propertyDescriptions[selectedDesc];

            var numberOfDesc = [];
            for (var i = 0; i < props.property.propertyDescriptions.length; i++) {
                numberOfDesc.push(i);
            }
            setNumberOfDesc(numberOfDesc);
        }
        let tempObject = {};
        tempObject['name'] = descriptions.name;
        tempObject['summary'] = descriptions.summary;
        tempObject['headline'] = descriptions.headline;
        tempObject['directions'] = descriptions.directions;
        tempObject['ownerInfo'] = descriptions.ownerInfo;
        tempObject['guestAccess'] = descriptions.guestAccess;
        tempObject['guestBookMessage'] = descriptions.guestBookMessage;
        tempObject['additionalHouseRules'] = descriptions.additionalHouseRules;
        tempObject['languageCode'] = descriptions.languageCode;

        setPropertyDescriptions(tempObject);
    }, [props.propertySearch, selectedDesc]);

    return (
        <table>
            <tbody>
                {Object.keys(propertyDetails).map((info, index) => (
                    <tr key={index}>
                        <DataName>{camelCaseToSentenceCase(info)}</DataName>
                        <DataContent>{displayObjectValue(propertyDetails[info])}</DataContent>
                    </tr>
                ))}
                <div>
                    <h4>Descriptions</h4>
                </div>
                <tr>
                    <DataName>
                        Descriptions <span>(Select any number)</span>
                    </DataName>
                    <DataContent>
                        {numberOfDesc.map((index) => (
                            <DescriptionIndex key={index} onClick={() => setSelectedDesc(index)} selected={index == selectedDesc}>
                                {index + 1}
                            </DescriptionIndex>
                        ))}
                    </DataContent>
                </tr>

                {Object.keys(propertyDescriptions).map((info, index) => (
                    <tr key={index}>
                        <DataName>{camelCaseToSentenceCase(info)}</DataName>
                        <DataContent>{propertyDescriptions[info]}</DataContent>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
