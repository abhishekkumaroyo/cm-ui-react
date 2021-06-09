import React, { Component } from 'react';
import { LanguageRow, Language, HeaderContainer, HeaderSectionTitle, HeaderColumn, HeaderTitle, HeaderContent } from './styles.js';

import { connect } from 'react-redux';
import { languages } from '../../constants/languages';
import { changeLanguage } from '../../actions/propertyLanguageAction';
import { toggleSidebar } from '../../actions/homeActions';

class PropertyHeader extends Component {
    changeLang = (lang) => {
        if (this.props.propertyLanguages.includes(lang)) {
            this.props.changeLanguage(lang);
        }
    };

    render() {
        return (
            <HeaderContainer>
                <HeaderTitle>
                    {this.props.title} ({this.props.id})
                </HeaderTitle>
                <HeaderContent>
                    <HeaderColumn>
                        <HeaderSectionTitle>Select language:</HeaderSectionTitle>
                        <LanguageRow>
                            {languages.map((lang, index) =>
                                this.props.propertyLanguages.includes(lang) ? (
                                    <Language key={index} selected={this.props.language.language === lang} onClick={() => this.changeLang(lang)}>
                                        {lang}
                                    </Language>
                                ) : null
                            )}
                        </LanguageRow>
                    </HeaderColumn>
                    <HeaderColumn>{this.props.children}</HeaderColumn>
                </HeaderContent>
            </HeaderContainer>
        );
    }
}

export default connect(null, {
    changeLanguage,
    toggleSidebar
})(PropertyHeader);
