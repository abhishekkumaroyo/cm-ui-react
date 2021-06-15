import React, { useEffect, useState, Component } from 'react';

import Button, { LoaderButton } from '../Button/index.js';
import { Inputbox, SearchbarContainer } from './styles.js';
import { connect, useDispatch } from 'react-redux';
import { searchAction } from '../../actions/propertySearchActions';

import { useHistory, useRouteMatch } from 'react-router-dom';

function Searchbar(props) {
    const history = useHistory();
    //const dispatch = useDispatch();

    const [searchInput, setSearchInput] = useState('');

    // let match = useRouteMatch(`/property/${searchInput}`);

    const onInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const onSeachClick = () => {
        //dispatch(searchAction({ searchInput: searchInput }));
        history.push(`/property/${searchInput}`);
    };

    return (
        <SearchbarContainer>
            <Inputbox placeholder="Search Property" type="text" onChange={onInputChange} />
            {props.propertySearch.searchFetching ? <LoaderButton /> : <Button message="Search" onButtonClick={onSeachClick} type="white" />}

            {props.children}
        </SearchbarContainer>
    );
}

const mapStateToProps = (state) => ({
    home: state.home,
    propertySearch: state.propertySearch
});

export default connect(mapStateToProps, {
    searchAction
})(Searchbar);
