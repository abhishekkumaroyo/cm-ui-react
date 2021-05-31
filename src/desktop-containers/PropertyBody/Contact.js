import React, { useEffect, useState } from 'react';
import PropertyCard from '../../components/PropertyCard';
import { ContentBodyWrapper, PropertyCardWrapper } from './stylesContact';
import { TableDataName, TableDataContent } from './styles';

export default function Contact(props) {
    const [contactInfos, setContactInfos] = useState([]);

    useEffect(() => {
        if (props.propertySearch.property && props.propertySearch.property.contactInfoList) {
            setContactInfos(props.propertySearch.property.contactInfoList);
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
