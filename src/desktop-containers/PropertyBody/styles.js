import styled from 'styled-components/macro';

export const SearchError = styled.div`
    //width: 100%;
    margin: auto 10px;

    color: red;

    //position: fixed;
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

export const StyledImage = styled.img`
    margin: 5px;
    height: 100px;
`;
