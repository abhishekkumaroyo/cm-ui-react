import React, { Component } from 'react';
import { CardContainer, CardTitleContainer, CardContentContainer } from './styles';

export class PropertyCard extends Component {
    render() {
        return (
            <CardContainer>
                <CardTitleContainer>{this.props.title}</CardTitleContainer>
                <CardContentContainer>{this.props.children}</CardContentContainer>
            </CardContainer>
        );
    }
}

export default PropertyCard;
