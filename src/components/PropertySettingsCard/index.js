import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import PropertyHeader from '../../components/PropertyHeader';
import { camelCaseToSentenceCase, displayLanguageText, displayObjectValue } from '../../utils/helper';
import { DataContent, DataName } from './styles.js';

export default function PropertySettingsCard(props) {
    const [propertyy, setPropertyy] = useState({});

    useEffect(() => {
        let proper = {};

        if (props.property.propertySettings) {
            proper = props.property.propertySettings;
            let infoObject3 = {};
            infoObject3['permitInfo'] = proper.permitInfo;
            infoObject3['registeredForVAT'] = proper.registeredForVAT;
            infoObject3['registeredInTradeCommercialCenter'] = proper.registeredInTradeCommercialCenter;
            infoObject3['declaresRevenue'] = proper.declaresRevenue;

            setPropertyy(infoObject3);
        }
    });
    return (
        <table>
            <tbody>
                {Object.keys(propertyy).map((info, index) => (
                    <tr key={index}>
                        <DataName>{camelCaseToSentenceCase(info)}</DataName>
                        <DataContent>{displayObjectValue(propertyy[info])}</DataContent>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
