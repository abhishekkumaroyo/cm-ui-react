import React from 'react';
import LoaderDots from '../LoaderDots';

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
    // const { loading, loaderProps } = props;
    return (
        <ButtonContainer type={props.type}>
            <LoaderDots />
        </ButtonContainer>
    );
};

export default Button;
