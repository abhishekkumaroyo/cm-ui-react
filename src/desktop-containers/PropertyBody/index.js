/* eslint-disable no-unused-vars */
import React, { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, useHistory } from 'react-router-dom';

import { connect, useDispatch } from 'react-redux';

import ContentMenu from '../../components/ContentMenu';
import Searchbar from '../../components/Searchbar';
import { SearchError } from './styles';
import ContentNav from '../../components/ContentNav';
import BasicDetails from './BasicDetails';
import Images from './Images';
import Contact from './Contact';
import Policies from './Policies';
import Amenities from './Amenities';
import Unit from './Unit';
import MappingDetails from './MappingDetails';

import { searchAction } from '../../actions/propertySearchActions';

function PropertyBody(props) {
    let { propertyId } = useParams();

    const [property, setProperty] = useState();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (propertyId) {
            dispatch(searchAction({ searchInput: propertyId }));
        } else if (props.propertySearch.property && props.propertySearch.property.externalPropertyId) {
            history.push(`property/${props.propertySearch.property.externalPropertyId}`);
        }
    }, [propertyId]);

    const ErrorMessage = <SearchError>{props.propertySearch.searchErrorMessage}</SearchError>;

    return (
        <div>
            <ContentMenu title="Property">
                <Searchbar>{props.propertySearch.searchError ? ErrorMessage : null}</Searchbar>
            </ContentMenu>

            {propertyId ? <ContentNav propertyId={propertyId} /> : null}

            <Switch>
                <Route exact path={`/`}>
                    <BasicDetails propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>
                <Route exact path={`/property/:id/`}>
                    <BasicDetails propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>
                <Route exact path={`/property/:id/basic`}>
                    <BasicDetails propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/images`}>
                    <Images propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/mapping`}>
                    <MappingDetails propertySearch={props.propertySearch} />
                </Route>

                <Route exact path={`/property/:id/contact`}>
                    <Contact propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/policies`}>
                    <Policies propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/amenities`}>
                    <Amenities propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>

                <Route path={`/property/:id/unit`}>
                    <Unit propertySearch={props.propertySearch} language={props.propertyLanguage} />
                </Route>
            </Switch>
        </div>
    );
}

// class PropertyBody extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             propertyId: null
//         };
//     }

//     componentDidMount() {
//         if (this.props.propertySearch.property && this.props.propertySearch.property.externalPropertyId) {
//             this.setState({
//                 propertyId: this.props.propertySearch.property.externalPropertyId
//             });
//         }
//     }

//     render() {
// const ErrorMessage = <SearchError>{this.props.propertySearch.searchErrorMessage}</SearchError>;

// return (
//     <div>
//         <ContentMenu title="Property">
//             <Searchbar>{this.props.propertySearch.searchError ? ErrorMessage : null}</Searchbar>
//         </ContentMenu>

//         {this.state.propertyId ? <ContentNav propertyId={this.props.propertySearch.property.externalPropertyId} /> : null}

//         <Switch>
//             <Route exact path={`/property/`}>
//                 <BasicDetails propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
//             </Route>

//             {this.state.propertyId ? (
//                 <Route path={`/property/${this.props.propertySearch.property.externalPropertyId}/basic`}>
//                     <BasicDetails propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
//                 </Route>
//             ) : null}

//             <Route path="/property/images">
//                 <Images propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
//             </Route>

//             <Route path="/property/mapping">
//                 <MappingDetails propertySearch={this.props.propertySearch} />
//             </Route>

//             <Route path="/property/contact">
//                 <Contact propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
//             </Route>

//             <Route path="/property/policies">
//                 <Policies propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
//             </Route>

//             <Route path="/property/amenities">
//                 <Amenities propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
//             </Route>

//             <Route path="/property/unit">
//                 <Unit propertySearch={this.props.propertySearch} language={this.props.propertyLanguage} />
//             </Route>
//         </Switch>
//     </div>
// );
//     }
// }

const mapStateToProps = (state) => ({
    home: state.home,
    propertySearch: state.propertySearch,
    propertyLanguage: state.propertyLanguage
});

export default connect(mapStateToProps, {
    searchAction
})(PropertyBody);
