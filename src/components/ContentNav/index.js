import { NavContainer, NavItems } from './styles';
import { Link, useRouteMatch } from 'react-router-dom';

import React from 'react';

export default function ContentNav() {
    let match = useRouteMatch();
    return (
        <div>
            <NavContainer>
                <NavItems>
                    <Link to={`${match.url}/basic`} style={{ textDecoration: 'none' }}>
                        Basic Details
                    </Link>
                </NavItems>
                <NavItems>
                    <Link to={`${match.url}/contact`} style={{ textDecoration: 'none' }}>
                        Contact
                    </Link>
                </NavItems>
                <NavItems>
                    <Link to={`${match.url}/policies`} style={{ textDecoration: 'none' }}>
                        Policies
                    </Link>
                </NavItems>
                <NavItems>
                    <Link to={`${match.url}/amenities`} style={{ textDecoration: 'none' }}>
                        Amenities
                    </Link>
                </NavItems>
                <NavItems>
                    <Link to={`${match.url}/unit`} style={{ textDecoration: 'none' }}>
                        Unit
                    </Link>
                </NavItems>
            </NavContainer>
        </div>
    );
}
