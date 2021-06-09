import styled from 'styled-components/macro';

export const UnitName = styled.span`
    padding: 5px 10px;
    cursor: pointer;

    background-color: ${(props) => (props.selected ? 'yellow' : '0')};
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;
