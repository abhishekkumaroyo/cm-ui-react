import React, { useEffect, useState } from 'react';
import { camelCaseToSentenceCase, displayLanguageText, displayObjectValue } from '../../utils/helper';
import { DataContent, DataName } from './styles';

export default function PropertyDetailsCard(props) {
    const [propertyDetails, setPropertyDetails] = useState({});
    const [propertyDescriptions, setPropertyDescriptions] = useState({});
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        let infoObject = {};
        let descriptions = {};

        if (props.language) {
            setLanguage(props.language.language);
        }
        if (props.property.parentId || props.property.externalPropertyId) {
            if (!props.property.parentId) {
                // case of property
                infoObject['externalPropertyId'] = props.property.externalPropertyId;
                infoObject['propertyType'] = props.property.propertyType;
                infoObject['hasMultipleSellableUnitsOrNot'] = props.property.hasMultipleSellableUnitsOrNot;
                infoObject['currencyCode'] = props.property.currencyCode;
                infoObject['languageCodes'] = props.property.languageCodes;
                setPropertyDetails(infoObject);

                descriptions = props.property.propertyDescriptions;
                let tempObject = {};

                tempObject['name'] = descriptions.name;
                tempObject['summary'] = descriptions.summary;
                tempObject['headline'] = descriptions.headline;
                tempObject['directions'] = descriptions.directions;
                tempObject['ownerInfo'] = descriptions.ownerInfo;
                tempObject['guestAccess'] = descriptions.guestAccess;
                tempObject['guestBookMessage'] = descriptions.guestBookMessage;
                tempObject['additionalHouseRules'] = descriptions.additionalHouseRules;

                setPropertyDescriptions(tempObject);
            } else {
                // case of unit
                infoObject = {};
                infoObject['unitExternalId'] = props.property.unitExternalId;
                infoObject['parentId'] = props.property.parentId;
                infoObject['type'] = props.property.type;
                infoObject['subType'] = props.property.subType;
                infoObject['sellable'] = props.property.sellable;
                infoObject['commonSpace'] = props.property.commonSpace;

                setPropertyDetails(infoObject);

                descriptions = {};
                descriptions = props.property.description;
                let tempObject = {};

                if (!descriptions) {
                    setPropertyDescriptions(tempObject);
                    return;
                }

                tempObject['name'] = descriptions.name;
                tempObject['summary'] = descriptions.summary;
                tempObject['headline'] = descriptions.headline;
                tempObject['directions'] = descriptions.directions;
                tempObject['ownerInfo'] = descriptions.ownerInfo;
                tempObject['guestAccess'] = descriptions.guestAccess;
                tempObject['guestBookMessage'] = descriptions.guestBookMessage;
                tempObject['additionalHouseRules'] = descriptions.additionalHouseRules;

                setPropertyDescriptions(tempObject);
            }
        }
    }, [props.property, props.language]);

    return (
        <table>
            <tbody>
                {Object.keys(propertyDetails).map((info, index) => (
                    <tr key={index}>
                        <DataName>{camelCaseToSentenceCase(info)}</DataName>
                        <DataContent>{displayObjectValue(propertyDetails[info])}</DataContent>
                    </tr>
                ))}
                <tr>
                    <td>
                        <div>
                            <h4>Descriptions</h4>
                        </div>
                    </td>
                </tr>

                {Object.keys(propertyDescriptions).map((info, index) => (
                    <tr key={index}>
                        <DataName>{camelCaseToSentenceCase(info)}</DataName>
                        <DataContent>{displayLanguageText(propertyDescriptions[info], language)}</DataContent>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
