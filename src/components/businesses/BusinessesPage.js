import React from 'react';
import {Link} from 'react-router';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as businessActions from '../../actions/businessActions';
import PropTypes from 'prop-types';
import BusinessList from './BusinessList';

class BusinessesPage extends React.Component {
    constructor (props) {
        super(props);
    }
    businessRow(business, index) {
        return <div key={index}> {business.title} </div>
    }

    render() {
        const {businesses} = this.props;
        return(
            <div className="hero2">
                <div className="container">
                    <div className="welcome_text" style={{backgroundColor: '#ffffff', width: '12%'}}>
                        <h4>Welcome</h4>
                        <Link to="registerBusiness"><Button color="secondary" size="sm">Register Business</Button></Link>
                    </div> 
                </div>
                <div className="container">
                <h1>Businesses</h1>
                <BusinessList businesses = {businesses} />
                </div>
                
            </div>
        );
    }
}

BusinessesPage.propTypes = {
    businesses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

};

function MapStateToProps(state, ownProps) {
    return {
        state: state.businesses
    };
}

function MapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(businessActions, dispatch)
    };
}

export default connect(MapStateToProps, MapDispatchToProps)(BusinessesPage);