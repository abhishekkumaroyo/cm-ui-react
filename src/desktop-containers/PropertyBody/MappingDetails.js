import React from 'react';
import Button from '../../components/Button';
import PropertyCard from '../../components/PropertyCard';

export default function MappingDetails(props) {
    return (
        <div>
            <PropertyCard title="MappingDetails"></PropertyCard>
            <br />
            <div>
                <p1 style={{ color: 'red' }}>Websites</p1>{' '}
                <p2 style={{ color: 'lightblue' }}>On which websites(s) will this accomaodation appear?</p2> <br />
                <p3 style={{ color: 'green' }}>This accomodation appears on the following @Liesure websites:</p3>
                <br />
                <br /> <br /> <br /> <br />
                <p4>
                    This accomodation does not appear on the website of ther following distribution partner(s):
                    <br />
                    <span style={{ color: 'lightblue' }}>Google Vacation Rental</span>
                </p4>
                <br /> <br />
            </div>
        </div>
    );
}
