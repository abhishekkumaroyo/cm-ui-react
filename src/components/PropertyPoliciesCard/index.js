import React, { useEffect, useState } from 'react';
import { camelCaseToSentenceCase } from '../../utils/helper';
import { DataContent, DataName } from './styles';

export default function PropertyPoliciesCard(props) {
    const [propertyPolicies, setPropertyPolicies] = useState({});

    useEffect(() => {
        if (props.property.policies) {
            setPropertyPolicies(props.property.policies);
        } else {
            setPropertyPolicies({});
        }
    }, [props.property]);

    return (
        <table>
            <tbody>
                {Object.keys(propertyPolicies).map((info, index) => (
                    <div key={index}>
                        {index + 1}.) {camelCaseToSentenceCase(info)}
                    </div>
                ))}
            </tbody>
        </table>
    );
}
