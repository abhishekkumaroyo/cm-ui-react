import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import { ContentBodyWrapper, PropertyCardWrapper } from './stylesContact';
import { TableDataName, TableDataContent } from './styles';
import { BasicDetailsColumn } from './stylesBasicDetails';
import { camelCaseToSentenceCase, displayObjectValue } from '../../utils/helper';

export default function Policies(props) {
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        if (props.propertySearch.property && props.propertySearch.property.policies) {
            setPolicies(props.propertySearch.property.policies);
        }
    });

    if (!props.propertySearch.property) {
        return <PropertyCard title="Property Policies">Enter correct property id</PropertyCard>;
    }

    return (
        <ContentBodyWrapper>
            <BasicDetailsColumn>
                <PropertyCard title="Cancellation Policy">
                    {policies.cancellationPolicy ? (
                        <table>
                            <tbody>
                                {Object.keys(policies.cancellationPolicy).map((item, index) => (
                                    <tr key={index}>
                                        <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                                        <TableDataContent>{displayObjectValue(policies.cancellationPolicy[item])}</TableDataContent>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div> no policy </div>
                    )}
                </PropertyCard>
                <PropertyCard title="Instant Booking Policy">
                    {policies.instantBookingPolicy ? (
                        <table>
                            <tbody>
                                {Object.keys(policies.instantBookingPolicy).map((item, index) => (
                                    <tr key={index}>
                                        <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                                        <TableDataContent>{displayObjectValue(policies.instantBookingPolicy[item])}</TableDataContent>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div> no policy </div>
                    )}
                </PropertyCard>
                <PropertyCard title="Pre-Payment Policy">
                    {policies.cancellationPolicy ? (
                        <table>
                            <tbody>
                                {Object.keys(policies.prePaymentPolicy).map((item, index) => (
                                    <tr key={index}>
                                        <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                                        <TableDataContent>{displayObjectValue(policies.prePaymentPolicy[item])}</TableDataContent>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div> no policy </div>
                    )}
                </PropertyCard>
                <PropertyCard title="General Policies">
                    {policies.generalPolicies ? (
                        <table>
                            {policies.generalPolicies.map((policy, index) => (
                                <tbody key={index}>
                                    <div>
                                        <b>{policy.code}</b>
                                        <br />
                                    </div>
                                    {Object.keys(policy).map((item, itemIndex) => (
                                        <tr key={itemIndex}>
                                            <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                                            <TableDataContent>{displayObjectValue(policy[item])}</TableDataContent>
                                        </tr>
                                    ))}
                                </tbody>
                            ))}
                        </table>
                    ) : (
                        <div> no policy </div>
                    )}
                </PropertyCard>
            </BasicDetailsColumn>
            <BasicDetailsColumn>
                <PropertyCard title="Internet Policy">
                    {policies.internetPolicy ? (
                        <table>
                            <tbody>
                                {Object.keys(policies.internetPolicy).map((item, index) => (
                                    <tr key={index}>
                                        <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                                        <TableDataContent>{displayObjectValue(policies.internetPolicy[item])}</TableDataContent>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div> no policy </div>
                    )}
                </PropertyCard>
                <PropertyCard title="Parking Policy">
                    {policies.parkingPolicy ? (
                        <table>
                            <tbody>
                                {Object.keys(policies.parkingPolicy).map((item, index) => (
                                    <tr key={index}>
                                        <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                                        <TableDataContent>{displayObjectValue(policies.parkingPolicy[item])}</TableDataContent>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div> no policy </div>
                    )}
                </PropertyCard>
                <PropertyCard title="Internet Policy">
                    {policies.internetPolicy ? (
                        <table>
                            <tbody>
                                {Object.keys(policies.internetPolicy).map((item, index) => (
                                    <tr key={index}>
                                        <TableDataName>{camelCaseToSentenceCase(item)}</TableDataName>
                                        <TableDataContent>{displayObjectValue(policies.internetPolicy[item])}</TableDataContent>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div> no policy </div>
                    )}
                </PropertyCard>
            </BasicDetailsColumn>
        </ContentBodyWrapper>
    );
}
