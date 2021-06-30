import React, { useEffect, useState } from 'react';
import { camelCaseToSentenceCase } from '../../utils/helper';
export default function SettingsCard(props) {
    const [settings, setSettings] = useState({});
    // const [selectedPolicy, setSelectedPolicy] = useState(null);
    // const [policyName, setPolicyName] = useState('');

    // const selectPolicy = (policy) => {
    //     setPolicyName(policy);
    //     setSelectedPolicy(propertyPolicies[policy]);
    // };

    useEffect(() => {
        if (props.property.settingsList) {
            setSettings(props.property.settingsList);
        } // } else {
        //     setPropertyPolicies({});
        //     setSelectedPolicy(null);
        //     setPolicyName('');
        // }
    }, [props.property]);

    return (
        <table>
            <div>
                {Object.keys(settings).map((info, index) => (
                    <tr key={index}>
                        <td>
                            {index + 1}.) {info}
                        </td>
                    </tr>
                ))}
                <br />
                1-Content Settings
                <br />
                2-InventorySettings
                <br />
                3-PropertySettings
                <br />
                4-PricingSettings <br />
                {/* {selectedPolicy ? (
                    <tr>
                        <td>
                            <PropertyCard title={camelCaseToSentenceCase(policyName)}>
                                <PolicyDisplay policy={selectedPolicy} type={policyName} />
                            </PropertyCard>
                        </td>
                    </tr>
                ) : null} */}
            </div>
        </table>
    );
}
