/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import Button, { LoaderButton } from '../../components/Button/index.js';

import axios from 'axios';
import { LoginPageContainer, LoginBox, InputBox, LoginBoxHeader, LoginBoxItem, ItemName } from './styles.js';

import { connect } from 'react-redux';
import { loginAction } from '../../actions/authActions';

import * as apiConstants from '../../constants/apiConstants';
const baseURL = apiConstants.API_HOST + '/';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            credentials: false,
            companyName: '',
            username: '',
            password: '',
            clientId: ''
        };
    }

    onClientIdChange = (e) => {
        this.setState({
            clientId: e.target.value.toUpperCase()
        });
    };

    onUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    };

    onPasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    onLoginClick = (e) => {
        e.preventDefault();
        var data = { clientId: this.state.clientId, username: this.state.username, password: this.state.password };

        this.props.loginAction(data);
    };

    render() {
        return (
            <LoginPageContainer>
                <LoginBox>
                    <LoginBoxHeader> Enter Your Credentials </LoginBoxHeader>
                    <LoginBoxItem>
                        <ItemName>Client Id</ItemName>
                        <InputBox onChange={this.onClientIdChange} placeholder="Client Id" />
                    </LoginBoxItem>
                    <LoginBoxItem>
                        <ItemName>Username</ItemName>
                        <InputBox onChange={this.onUsernameChange} placeholder="Username" />
                    </LoginBoxItem>
                    <LoginBoxItem>
                        <ItemName>Password</ItemName>
                        <InputBox onChange={this.onPasswordChange} placeholder="Password" type="password" />
                    </LoginBoxItem>

                    {this.props.login.verifying ? <LoaderButton /> : <Button message="Login" onButtonClick={this.onLoginClick} />}
                    {this.props.login.loginError ? (
                        <div>{this.props.login.loginErrorMessage}</div>
                    ) : this.props.login.loggedIn ? (
                        <div>welcome {this.props.login.userData.username}</div>
                    ) : (
                        <div>enter details</div>
                    )}
                </LoginBox>
            </LoginPageContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.login
});

export default connect(mapStateToProps, {
    loginAction
})(Login);
