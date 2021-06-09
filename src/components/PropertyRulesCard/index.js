import React, { useEffect, useState } from 'react';
import { TableDataContent, TableDataName } from '../../desktop-containers/PropertyBody/styles';
import { camelCaseToSentenceCase, displayObjectValue } from '../../utils/helper';

export default function PropertyRulesCard(props) {
    const [propertyRules, setPropertyRules] = useState({});

    useEffect(() => {
        if (props.property.rules && props.property.rules.propertyRules) {
            setPropertyRules(props.property.rules.propertyRules);
        } else {
            setPropertyRules({});
        }
    }, [props.property]);

    return (
        <table>
            <tbody>
                {Object.keys(propertyRules).map((rule, index) => (
                    <tr key={index}>
                        <TableDataName>{camelCaseToSentenceCase(rule)}</TableDataName>
                        <TableDataContent>{displayObjectValue(propertyRules[rule])}</TableDataContent>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
