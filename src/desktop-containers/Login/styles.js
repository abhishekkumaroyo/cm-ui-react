import styled from 'styled-components/macro';

export const LoginPageContainer = styled.div`
    width: 100%;
    margin: 10px;
`;

export const LoginBox = styled.div`
    /* display: flex; */
    display: flex;
    flex-direction: column;
    min-height: 300px;
    border-radius: 3px;
    /* justify-content: center;
    align-items: center; */
    max-width: 500px;
    margin: auto;
`;

export const LoginBoxHeader = styled.div`
    color: black;
    font-weight: 700;
    font-size: 25px;
    margin: auto;
`;

export const LoginBoxItem = styled.div`
    /* display: flex; */
    display: flex;
    flex-direction: row;
    margin: 5px;
`;

export const ItemName = styled.div`
    margin: 5px;
    min-width: 100px;
`;

export const InputBox = styled.input`
    //width: 100%;
    width: 60%;
`;

export const ButtonContainer = styled.div`
    width: 175px;
    margin: auto;
`;
