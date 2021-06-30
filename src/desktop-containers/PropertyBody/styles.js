import styled from 'styled-components/macro';

export const SearchError = styled.div`
    margin: auto 10px;
    color: red;
`;

export const StyledImage = styled.img`
    margin: 5px;
    height: 100px;
`;

export const PropertyColumn = styled.div`
    padding: 0px 7.5px;
    position: relative;
    min-height: 1px;

    @media (min-width: 992px) {
        width: 50%;
        float: left;
    }
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
