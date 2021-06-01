import styled from 'styled-components/macro';

export const SearchError = styled.div`
    margin: auto 10px;
    color: red;
`;

export const StyledImage = styled.img`
    margin: 5px;
    height: 100px;
`;

export const TableDataName = styled.td`
    width: 25%;
    border: 0;
    border-bottom: 1px solid #f2f5f8;
    color: #717171;
    vertical-align: middle;
    padding: 5px;
    line-height: 1.42857;
    font-weight: 700;
`;

export const TableDataContent = styled.td`
    width: 75%;
    border: 0;
    border-bottom: 1px solid #f2f5f8;
    color: #717171;
    vertical-align: middle;
    padding: 5px;
    line-height: 1.42857;
`;

export const LanguageRow = styled.div`
    display: flex;
`;

export const Language = styled.div`
    padding: 3px;
    margin: 5px;
    cursor: pointer;
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;
