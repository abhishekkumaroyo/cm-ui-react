import styled, { css } from 'styled-components/macro';

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 10px;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;

    min-height: 50px;
    background: #ee2a24;
    border: 1px solid #ee2a24;
    border-radius: 6px;
    box-sizing: border-box;
    color: #ffffff;
    min-width: 140px;

    ${(props) =>
        props.type == 'white' &&
        css`
            background: #ffffff;
            border: 1px solid rgba(34, 152, 218, 0.5);
            color: #2298da;
        `}//position: fixed;
`;
