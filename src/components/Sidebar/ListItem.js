import React, { useEffect, useState } from 'react';
import { IconContainer, SidebarContent, TextContainer } from './styles.js';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';

import { connect } from 'react-redux';

import { toggleSidebar } from '../../actions/homeActions';

export const ListItem = (props) => {
    let match = useRouteMatch(props.url);
    const [matched, setMatch] = useState(false);

    useEffect(() => {
        if (match) {
            setMatch(true);
        } else {
            setMatch(false);
        }
    });

    const toggleSide = () => {
        props.toggleSidebar();
    };

    return (
        <Link to={props.url} style={{ textDecoration: 'none' }}>
            <SidebarContent styled={matched}>
                <IconContainer onClick={toggleSide}>{props.icon}</IconContainer>
                <TextContainer visible={props.home.sidebar}>{props.name}</TextContainer>
            </SidebarContent>
        </Link>
    );
};

const mapStateToProps = (state) => ({
    home: state.home
});

export default connect(mapStateToProps, {
    toggleSidebar
})(ListItem);
