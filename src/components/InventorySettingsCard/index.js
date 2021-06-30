import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import PropertyHeader from '../../components/PropertyHeader';
import { camelCaseToSentenceCase, displayLanguageText, displayObjectValue } from '../../utils/helper';
import { DataContent, DataName } from './styles.js';

export default function InventorySettingsCard(props) {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        let invent = {};

        if (props.property.inventorySettings) {
            invent = props.property.inventorySettings;
            let infoObject4 = {};
            infoObject4['inventoryModel'] = invent.inventoryModel;
            infoObject4['checkInTimeStart'] = invent.checkInTimeStart;
            infoObject4['checkInTimeEnd'] = invent.checkInTimeEnd;
            infoObject4['checkOutTimeStart'] = invent.checkOutTimeStart;
            infoObject4['checkOutTimeEnd'] = invent.checkOutTimeEnd;
            infoObject4['checkInRestrictedOn'] = invent.checkInRestrictedOn;
            infoObject4['checkOutRestrictedOn'] = invent.checkOutRestrictedOn;
            infoObject4['minLengthOfStay'] = invent.minLengthOfStay;
            infoObject4['maxLengthOfStay'] = invent.maxLengthOfStay;

            setInventory(infoObject4);
        }
    });
    return (
        <table>
            <tbody>
                {Object.keys(inventory).map((info, index) => (
                    <tr key={index}>
                        <DataName>{camelCaseToSentenceCase(info)}</DataName>
                        <DataContent>{displayObjectValue(inventory[info])}</DataContent>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
