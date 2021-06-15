import React, { Component } from 'react';
import ContentMenu from '../../components/ContentMenu';
import PromotionsSearch from '../../components/PromotionsSearch';
import { PageContainer } from './styles';

export class Promotions extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <ContentMenu title="Promotions"></ContentMenu>
                <PageContainer>
                    <PromotionsSearch />
                </PageContainer>
            </div>
        );
    }
}

export default Promotions;
