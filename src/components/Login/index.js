/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
//import BodyContent from '../../components/BodyContent';
//import Sidebar from '../../components/Sidebar';
import {
    LoginHeading,
    LoginPageContainer,
    LoginPageLeft,
    LoginPageRight,
    CompanyNameContainer,
    CompanyNameInput,
    FormContainer,
    CheckBoxContainer,
    ButtonContainer,
    LoginButton,
    CheckBox,
    CheckBoxText,
    LoginViaCredentials
} from './styles.js';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            credentials: false,
            companyName: '',
            email: '',
            password: ''
        };
    }

    viaCompany = (e) => {
        this.setState({
            credentials: false
        });
    };

    viaCredintials = () => {
        this.setState({
            credentials: true
        });
    };

    toggleCheckbox = () => {
        this.setState({
            checked: !this.state.checked
        });
    };

    render() {
        return (
            <LoginPageContainer>
                <LoginPageLeft>left</LoginPageLeft>
                <LoginPageRight>
                    <LoginHeading>Login to Bolt</LoginHeading>

                    <FormContainer>
                        <CompanyNameContainer>
                            <CompanyNameInput />
                        </CompanyNameContainer>
                        <CheckBoxContainer>
                            <CheckBox type="checkbox" onClick={this.toggleCheckbox} />
                            <CheckBoxText>Keep me logged in</CheckBoxText>
                        </CheckBoxContainer>
                        {/* <ButtonContainer> */}
                        <LoginButton> Login </LoginButton>
                        {this.state.credentials ? (
                            <LoginViaCredentials onClick={this.viaCompany}>Login via company</LoginViaCredentials>
                        ) : (
                            <LoginViaCredentials onClick={this.viaCredintials}>Login via credentials</LoginViaCredentials>
                        )}

                        {/* </ButtonContainer> */}
                    </FormContainer>
                </LoginPageRight>
            </LoginPageContainer>
        );
    }
}

export default Login;
