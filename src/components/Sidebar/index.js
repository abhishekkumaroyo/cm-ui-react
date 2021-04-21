/* eslint-disable no-unused-vars */
import React, { Component, useEffect } from 'react';
import { SidebarContainer } from './styles.js';

import list from './const';
import ListItem from './item.js';

export const Sidebar = () => {
    return (
        <SidebarContainer>
            {list.map((item) => (
                <ListItem key={item.id} url={item.url} name={item.name} icon={item.icon} />
            ))}
        </SidebarContainer>
    );
};

export default Sidebar;
