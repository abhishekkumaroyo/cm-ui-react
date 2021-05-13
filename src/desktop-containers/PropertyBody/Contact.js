import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import { ContentBodyWrapper, PropertyCardWrapper } from './stylesContact';
import { TableDataName, TableDataContent } from './styles';

export default function Contact(props) {
    const [contactInfos, setContactInfos] = useState([]);

    useEffect(() => {
        if (props.propertySearch.property && props.propertySearch.property.content && props.propertySearch.property.content.contactInfos) {
            setContactInfos(props.propertySearch.property.content.contactInfos);
            // const contactInfosTemp = [
            //     {
            //         type: 'reservations',
            //         address: {
            //             line1: 'Homero 1430 Col',
            //             line2: 'Polanco',
            //             city: 'Mexico City',
            //             state: 'Mexico',
            //             postalCode: '10250',
            //             countryCode: 'TH'
            //         },
            //         contactDetails: [
            //             {
            //                 firstName: 'Ayush',
            //                 lastName: 'Gupta',
            //                 phoneNumbers: [
            //                     {
            //                         type: 'mobile',
            //                         phoneNumber: '552134512345'
            //                     }
            //                 ],
            //                 emails: ['ayush.gupta@oyorooms.com', '123']
            //             },
            //             {
            //                 firstName: 'abhishek',
            //                 lastName: 'kumar',
            //                 phoneNumbers: [
            //                     {
            //                         type: 'mobile',
            //                         phoneNumber: '552134512345'
            //                     },
            //                     {
            //                         type: 'landline',
            //                         phoneNumber: '12345080'
            //                     }
            //                 ],
            //                 emails: ['abhishek.kumar30@oyorooms.com', '123']
            //             }
            //         ]
            //     },
            //     {
            //         type: 'invoices',
            //         address: {
            //             line1: 'Homero 1430 Col',
            //             line2: 'Polanco',
            //             city: 'Mexico City',
            //             state: 'Mexico',
            //             postalCode: '10250',
            //             countryCode: 'TH'
            //         },
            //         contactDetails: [
            //             {
            //                 firstName: 'Ayush',
            //                 lastName: 'Gupta',
            //                 phoneNumbers: [
            //                     {
            //                         type: 'mobile',
            //                         phoneNumber: '552134512345'
            //                     }
            //                 ],
            //                 emails: ['ayush.gupta@oyorooms.com']
            //             }
            //         ]
            //     }
            // ];
            //setContactInfos(contactInfosTemp);
        }
    });

    if (!props.propertySearch.property) {
        return <PropertyCard title="Property Contact">Enter correct property id</PropertyCard>;
    }

    return (
        <ContentBodyWrapper>
            {contactInfos.map((info, index) => (
                <PropertyCardWrapper key={index}>
                    <PropertyCard title={info.type}>
                        <table>
                            {info.contactDetails.map((cont, contIndex) => (
                                <tbody key={contIndex}>
                                    <tr>
                                        <td>
                                            <h5>Contact {contIndex + 1}</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <TableDataName>First Name</TableDataName>
                                        <TableDataContent>{cont.firstName}</TableDataContent>
                                    </tr>
                                    <tr>
                                        <TableDataName>Last Name</TableDataName>
                                        <TableDataContent>{cont.lastName}</TableDataContent>
                                    </tr>
                                    <tr>
                                        <TableDataName>Phone Numbers</TableDataName>
                                        <TableDataContent>
                                            {cont.phoneNumbers.map((phone, phoneIndex) => (
                                                <span key={phoneIndex}>
                                                    {phone.phoneNumber} ({phone.type})
                                                    <br />
                                                </span>
                                            ))}
                                        </TableDataContent>
                                    </tr>
                                    <tr>
                                        <TableDataName>Emails</TableDataName>
                                        <TableDataContent>
                                            {cont.emails.map((email, emailIndex) => (
                                                <span key={emailIndex}>
                                                    {email} <br />
                                                </span>
                                            ))}
                                        </TableDataContent>
                                    </tr>
                                </tbody>
                            ))}
                            <tbody>
                                <tr>
                                    <td>
                                        <h5>Address</h5>
                                    </td>
                                </tr>
                                {Object.keys(info.address).map((addInfo, index) => (
                                    <tr key={index}>
                                        <TableDataName>{addInfo}</TableDataName>
                                        <TableDataContent>{info.address[addInfo]}</TableDataContent>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </PropertyCard>
                </PropertyCardWrapper>
            ))}
        </ContentBodyWrapper>
    );
}
