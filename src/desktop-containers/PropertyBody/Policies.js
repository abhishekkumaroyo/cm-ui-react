import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';

import PolicyDisplay from '../../components/PolicyDisplay';
import { PropertyColumn } from './styles';

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
        <div>
            <PropertyColumn>
                <PropertyCard title="Cancellation Policy">
                    {policies.cancellationPolicy ? <PolicyDisplay policy={policies.cancellationPolicy} /> : <div> no policy </div>}
                </PropertyCard>
                <PropertyCard title="Instant Booking Policy">
                    {policies.instantBookingPolicy ? <PolicyDisplay policy={policies.instantBookingPolicy} /> : <div> no policy </div>}
                </PropertyCard>
                <PropertyCard title="Pre-Payment Policy">
                    {policies.prePaymentPolicy ? <PolicyDisplay policy={policies.prePaymentPolicy} /> : <div> no policy </div>}
                </PropertyCard>
                <PropertyCard title="General Policies">
                    {policies.generalPolicies ? <PolicyDisplay policy={policies.generalPolicies} type="generalPolicies" /> : <div> no policy </div>}
                </PropertyCard>
            </PropertyColumn>

            <PropertyColumn>
                <PropertyCard title="Internet Policy">
                    {policies.internetPolicy ? <PolicyDisplay policy={policies.internetPolicy} /> : <div> no policy </div>}
                </PropertyCard>
                <PropertyCard title="Parking Policy">
                    {policies.parkingPolicy ? <PolicyDisplay policy={policies.parkingPolicy} /> : <div> no policy </div>}
                </PropertyCard>
                <PropertyCard title="Internet Policy">
                    {policies.internetPolicy ? <PolicyDisplay policy={policies.internetPolicy} /> : <div> no policy </div>}
                </PropertyCard>
            </PropertyColumn>
        </div>
    );
}
