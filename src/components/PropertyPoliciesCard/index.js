import React, { useEffect, useState } from 'react';
import { camelCaseToSentenceCase } from '../../utils/helper';
import PolicyDisplay from '../PolicyDisplay';
import PropertyCard from '../PropertyCard';
import { PolicyName } from './styles';

export default function PropertyPoliciesCard(props) {
    const [propertyPolicies, setPropertyPolicies] = useState({});
    const [selectedPolicy, setSelectedPolicy] = useState(null);
    const [policyName, setPolicyName] = useState('');

    const selectPolicy = (policy) => {
        setPolicyName(policy);
        setSelectedPolicy(propertyPolicies[policy]);
    };

    useEffect(() => {
        if (props.property.policies) {
            setPropertyPolicies(props.property.policies);
        } else {
            setPropertyPolicies({});
            setSelectedPolicy(null);
            setPolicyName('');
        }
    }, [props.property]);

    return (
        <table>
            <tbody>
                {Object.keys(propertyPolicies).map((info, index) => (
                    <PolicyName
                        key={index}
                        onClick={() => {
                            selectPolicy(info);
                        }}
                        selected={policyName == info}>
                        {index + 1}.) {camelCaseToSentenceCase(info)}
                    </PolicyName>
                ))}
                <br />
                {selectedPolicy ? (
                    <PropertyCard title={camelCaseToSentenceCase(policyName)}>
                        <PolicyDisplay policy={selectedPolicy} type={policyName} />
                    </PropertyCard>
                ) : null}
            </tbody>
        </table>
    );
}
