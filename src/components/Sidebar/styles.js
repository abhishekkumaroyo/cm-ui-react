import styled, { css } from 'styled-components/macro';

export const SidebarContainer = styled.div`
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    background: #ffffff;
    z-index: 9;
    display: flex;
    flex-direction: column;
    //position: fixed;
`;

export const SidebarContent = styled.div`
    padding: 15px 10px;
    // height: 56px;
    // color: #808080;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    //font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    outline: none;
    cursor: pointer;
    display: flex;
    background-color: rgb(255, 255, 255);
    font-weight: 500;
    color: rgb(128, 128, 128);
    box-shadow: none;
    :hover {
        background-color: #f6f7f8;
    }
    ${(props) =>
        props.styley === true &&
        css`
            font-weight: bold;
            color: rgb(238, 42, 36);
            box-shadow: rgb(238 42 36) 3px 0px inset;
        `}
`;

export const IconContainer = styled.div`
    //width: 50px;
    padding: 0px 10px;
`;

export const TextContainer = styled.div`
    width: 170px;
    //color: red;
`;
