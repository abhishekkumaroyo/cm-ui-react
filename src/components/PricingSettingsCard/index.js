import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import PropertyHeader from '../../components/PropertyHeader';
import { camelCaseToSentenceCase, displayLanguageText, displayObjectValue } from '../../utils/helper';
import { DataContent, DataName } from './styles.js';

export default function PricingSettingsCard(props) {
    const [pricing, setPricing] = useState({});

    useEffect(() => {
        let price = {};

        if (props.property.pricingSettings) {
            price = props.property.pricingSettings;
            let infoObject3 = {};
            infoObject3['weekDayMarkup'] = price.weekDayMarkup;
            infoObject3['weekEndMarkup'] = price.weekEndMarkup;
            infoObject3['weeklyDiscount'] = price.weeklyDiscount;
            infoObject3['monthlyDiscount'] = price.monthlyDiscount;

            setPricing(infoObject3);
        }
    });
    return (
        <table>
            <tbody>
                {Object.keys(pricing).map((info, index) => (
                    <tr key={index}>
                        <DataName>{camelCaseToSentenceCase(info)}</DataName>
                        <DataContent>{displayObjectValue(pricing[info])}</DataContent>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
