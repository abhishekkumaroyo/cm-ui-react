import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import PropertyHeader from '../../components/PropertyHeader';
import { camelCaseToSentenceCase, displayLanguageText, displayObjectValue } from '../../utils/helper';
import { DataContent, DataName } from './styles.js';

export default function ContentSettingsCard(props) {
    const [content, setContent] = useState({});

    useEffect(() => {
        let cont = {};

        if (props.property.contentSettings) {
            cont = props.property.contentSettings;
            let infoObject1 = {};
            infoObject1['showExactLocation'] = cont.showExactLocation;

            setContent(infoObject1);
        }
    });
    return (
        <table>
            <tbody>
                {Object.keys(content).map((info, index) => (
                    <tr key={index}>
                        <DataName>{camelCaseToSentenceCase(info)}</DataName>
                        <DataContent>{displayObjectValue(content[info])}</DataContent>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
