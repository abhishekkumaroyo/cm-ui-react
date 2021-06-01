import styled from 'styled-components/macro';

export const HeaderContainer = styled.div`
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: none;
    //width: 40%;
    background-color: white;
    margin: 5px;
    padding: 10px;
`;

export const LanguageRow = styled.div`
    display: flex;
`;

export const Language = styled.div`
    padding: 3px;
    margin: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.selected ? 'yellow' : '')};
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;
