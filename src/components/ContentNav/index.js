import { NavContainer, NavItems } from './styles';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, withRouter } from 'react-router-dom';

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
                    <Link to={`${match.url}/pictures`} style={{ textDecoration: 'none' }}>
                        Pictures
                    </Link>
                </NavItems>
            </NavContainer>
        </div>
    );
}
