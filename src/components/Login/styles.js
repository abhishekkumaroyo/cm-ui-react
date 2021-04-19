import styled from 'styled-components/macro';

export const LoginPageContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const LoginPageRight = styled.div`
    flex: 1;
    /* justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column; */
`;

export const LoginPageLeft = styled.div`
    flex: 1;
`;

export const LoginHeading = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    letter-spacing: -1px;
    color: #212121;
    margin: 20px;
`;

export const FormContainer = styled.form``;

export const CompanyNameContainer = styled.div``;

export const CheckBoxContainer = styled.div``;

export const CheckBox = styled.input`
    /* height: 100%;
    width: 100%; */
`;

export const CheckBoxText = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.5);
`;

export const ButtonContainer = styled.div``;

export const LoginButton = styled.button`
    background: #ee2a24;
    border-radius: 6px;
    cursor: pointer;
    color: #ffffff;
`;

export const CompanyNameInput = styled.input``;

export const LoginViaCredentials = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    //text-align: center;
    font-feature-settings: 'liga' off;
    color: #2298da;
    cursor: pointer;
`;
