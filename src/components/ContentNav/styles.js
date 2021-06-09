import styled from 'styled-components/macro';

export const NavContainer = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: white;
    display: flex;
    flex-direction: row;
    padding: 0 30px;
    /* border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: none;
    //width: 40%;
    background-color: white;
    margin: 5px;
    padding: 10px; */
    /* flex-basis: calc(50% - 10px);
    min-width: calc(100% * (1 / 4) - 1px); */
`;

export const NavItems = styled.div`
    margin: auto 15px;
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    font-weight: 500;
`;
