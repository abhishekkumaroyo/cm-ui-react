import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Button from '../Button/index.js';

import {} from '../Icons/icons.js';

import { Inputbox, SearchbarContainer } from './styles.js';

import { connect } from 'react-redux';
import { searchAction } from '../../actions/searchActions';

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            error: null
        };
    }

    onInputChange = (e) => {
        this.setState({
            searchInput: e.target.value
        });
    };

    onSeachClick = () => {
        this.props.searchAction(this.state);
    };

    render() {
        return (
            <SearchbarContainer>
                <Inputbox placeholder="Search Property" type="text" onChange={this.onInputChange} />
                <Button message="Search" onButtonClick={this.onSeachClick} />
                {this.props.children}
            </SearchbarContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    home: state.home
});

export default connect(mapStateToProps, {
    searchAction
})(Searchbar);
