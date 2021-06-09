import styled from 'styled-components/macro';

export const DashboardBodyContainer = styled.div`
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */
    margin-top: 15px;
`;

export const DashboardColumn = styled.div`
    padding: 0px 7.5px;
    position: relative;
    min-height: 1px;

    @media (min-width: 992px) {
        width: 50%;
        float: left;
    }
`;
