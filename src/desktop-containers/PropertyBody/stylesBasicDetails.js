import styled from 'styled-components/macro';

export const BasicDetailsColumn = styled.div`
    padding: 0px 7.5px;
    position: relative;
    min-height: 1px;

    @media (min-width: 992px) {
        width: 50%;
        float: left;
    }
`;

export const ShowMapButton = styled.div``;

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
