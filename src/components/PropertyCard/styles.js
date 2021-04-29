import styled from 'styled-components/macro';

export const CardContainer = styled.div`
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: none;
    //width: 40%;
    background-color: white;
    margin: 5px;
    padding: 10px;
    /* flex-basis: calc(50% - 10px);
    min-width: calc(100% * (1 / 4) - 1px); */
`;

export const CardTitleContainer = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.35px;
    color: #000000;
`;

export const CardContentContainer = styled.div`
    font-style: normal;
    // font-weight: bold;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.35px;
    color: #000000;

    margin-top: 15px;
`;
