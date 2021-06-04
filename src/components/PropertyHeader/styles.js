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
    display: flex;
    flex-direction: column;
`;

export const HeaderColumn = styled.div`
    border: 1px solid #f2f2f2;
    box-sizing: border-box;
    border-radius: 6px;
    box-shadow: none;
    //width: 40%;
    background-color: white;
    margin: 5px;
    padding: 10px;
    flex: 1;
`;

export const HeaderTitle = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.35px;
    color: #000000;
    margin: 10px;
`;

export const HeaderContent = styled.div`
    font-style: normal;
    // font-weight: bold;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.35px;
    color: #000000;
    display: flex;
`;

export const HeaderSectionTitle = styled.span`
    color: black;
    margin: 5px;
    font-weight: bold;
`;

export const LanguageRow = styled.div`
    display: flex;
`;

export const Language = styled.div`
    padding: 3px;
    margin: 5px;
    /* pointer-events: ${(props) => (props.enabled ? 'auto' : 'none')}; */
    /* cursor: ${(props) => (props.enabled ? 'pointer' : 'not-allowed')}; */
    cursor: pointer;
    background-color: ${(props) => (props.selected ? 'yellow' : '')};
    font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;
