import React, { Component, useEffect, useState } from 'react';
import { LanguageRow, Language, HeaderContainer } from './styles.js';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, withRouter } from 'react-router-dom';

//import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { languages } from '../../constants/languages';
import { changeLanguage } from '../../actions/propertyLanguageAction';
import { toggleSidebar } from '../../actions/homeActions';

class PropertyHeader extends Component {
    changeLang = (lang) => {
        this.props.changeLanguage(lang);
    };

    render() {
        return (
            <HeaderContainer>
                <div>Property Id = </div>
                <div>
                    Select language:
                    <LanguageRow>
                        {languages.map((lang, index) => (
                            <Language key={index} selected={this.props.language.language === lang} onClick={() => this.changeLang(lang)}>
                                {lang}
                            </Language>
                        ))}
                    </LanguageRow>
                </div>
            </HeaderContainer>
        );
    }
}

export default connect(null, {
    changeLanguage,
    toggleSidebar
})(PropertyHeader);
