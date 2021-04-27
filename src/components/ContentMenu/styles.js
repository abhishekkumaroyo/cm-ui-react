import styled from 'styled-components/macro';

export const MenuContainer = styled.div`
    width: 100%;
    background-color: #f3ffe3;
    min-height: 70px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: flex;
    //position: fixed;
`;

export const MenuTitle = styled.div`
    flex: 1;
    padding: 5px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.28px;
    color: #000000;
    display: flex;
    align-items: center;
    margin-left: 20px;
    //position: fixed;
`;

export const MenuItems = styled.div`
    flex: 3;
    display: flex;
    justify-content: flex-end;
    margin: 5px;
    //position: fixed;
`;
