import styled from 'styled-components/macro';

export const AmenityRow = styled.div`
    display: flex;
`;

export const AmenityRowItem = styled.div`
    flex: 1;
    margin: 2px;
    line-height: 1.5em;
    height: 3em;
    overflow: hidden;
    //white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    font-weight: ${(props) => (props.header ? 'bold' : 'normal')};
`;
