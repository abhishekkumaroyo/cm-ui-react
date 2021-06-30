import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import PropertyHeader from '../../components/PropertyHeader';
import { PropertyColumn } from './styles';
import ContentSettingsCard from '../../components/ContentSettingsCard';
import PricingSettingsCard from '../../components/PricingSettingsCard';
import InventorySettingsCard from '../../components/InventorySettingsCard';
import PropertySettingsCard from '../../components/PropertySettingsCard';

export default function Settings(props) {
    if (!props.propertySearch.property) {
        return <PropertyCard title="Settings">Enter correct property id</PropertyCard>;
    }
    return (
        <div>
            <PropertyHeader
                title="Settings"
                language={props.language}
                id={props.propertySearch.property.externalPropertyId}
                propertyLanguages={props.propertySearch.property.languageCodes}></PropertyHeader>

            <PropertyColumn>
                <PropertyCard title="Pricing Settings">
                    <PricingSettingsCard property={props.propertySearch.property} />
                </PropertyCard>
            </PropertyColumn>

            <PropertyColumn>
                <PropertyCard title="Content Settings">
                    <ContentSettingsCard property={props.propertySearch.property} />
                </PropertyCard>
            </PropertyColumn>
            <PropertyColumn>
                <PropertyCard title="Inventory Settings">
                    <InventorySettingsCard property={props.propertySearch.property} />
                </PropertyCard>
            </PropertyColumn>
        </div>
    );
}
