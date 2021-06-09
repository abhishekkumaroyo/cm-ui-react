import React, { Component } from 'react';

import Button, { LoaderButton } from '../Button/index.js';

import { Inputbox, SearchbarContainer } from './styles.js';

import { connect } from 'react-redux';
import { searchAction } from '../../actions/propertySearchActions';

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
            searchInput: e.target.value.toUpperCase()
        });
    };

    onSeachClick = () => {
        this.props.searchAction(this.state);
    };

    render() {
        return (
            <SearchbarContainer>
                <Inputbox placeholder="Search Property" type="text" onChange={this.onInputChange} />
                {this.props.propertySearch.searchFetching ? (
                    <LoaderButton />
                ) : (
                    <Button message="Search" onButtonClick={this.onSeachClick} type="white" />
                )}

                {this.props.children}
            </SearchbarContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    home: state.home,
    propertySearch: state.propertySearch
});

export default connect(mapStateToProps, {
    searchAction
})(Searchbar);
