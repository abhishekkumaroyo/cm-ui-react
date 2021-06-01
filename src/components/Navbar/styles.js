import styled from 'styled-components/macro';

export const NavbarContainer = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    height: 56px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-attachment: scroll;
    background-color: white;
    z-index: 10;
`;

export const MenuDisplay = styled.div`
    cursor: pointer;
    margin: 10px 15px;
    background-image: url(/Users/oyo/Desktop/cm-ui-react/src/components/Icons/icons/alertIcon.svg);
`;

export const TextContainer = styled.div`
    height: 16px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    margin: auto 5px;
    display: flex;
    align-items: center;
`;

export const AlertIcon = styled.div`
    cursor: pointer;
    margin: 13px;
    background-image: url(./icons/alertIcon.svg);
`;

export const NotificationIcon = styled.div`
    cursor: pointer;
    margin: 13px;
    background-image: url(./icons/notification.svg);
`;

export const PropertySearchBar = styled.div`
    cursor: pointer;
    margin: 13px;
    background-image: url(..../icons/ratePlansIcon.svg);
`;

export const DropDownMenu = styled.div`
    margin: 0px 5px;
    display: flex;
    background-image: url(../Icons/icons);
`;
