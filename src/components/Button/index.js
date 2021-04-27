import React from 'react';
//import {} from '../../desktop-containers/Login/styles';

import { ButtonContainer } from './styles';

export const Button = (props) => {
    const { message } = props;
    return (
        <ButtonContainer onClick={props.onButtonClick} type={props.type}>
            {message}
        </ButtonContainer>
    );
};

export const LoaderButton = (props) => {
    const { loading, loaderProps } = props;
};

export default Button;
