import styled from 'styled-components/macro';

export const DataName = styled.td`
    width: 25%;
    border: 0;
    border-bottom: 1px solid #f2f5f8;
    color: #717171;
    vertical-align: middle;
    padding: 5px;
    line-height: 1.42857;
    font-weight: 700;
`;

export const DataContent = styled.td`
    width: 75%;
    border: 0;
    border-bottom: 1px solid #f2f5f8;
    color: #717171;
    vertical-align: middle;
    padding: 5px;
    line-height: 1.42857;
`;

export const DescriptionIndex = styled.span`
    cursor: pointer;
    padding: 5px 10px;
    margin: auto;
    background-color: ${(props) => (props.selected ? 'yellow' : '0')};
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;
