import styled from 'styled-components/macro';

export const PolicyName = styled.div`
    padding: 5px;
    cursor: pointer;

    background-color: ${(props) => (props.selected ? 'yellow' : '0')};
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;
