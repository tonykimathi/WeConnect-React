import React from 'react';
import {Link} from 'react-router';
import { Button, Container, Row, Col, Input } from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as businessActions from '../../actions/businessActions';
import PropTypes from 'prop-types';
import BusinessList from './BusinessList';

class BusinessesPage extends React.Component {
    componentDidMount() {
        this.props.actions.getAllBusinesses();
      }

    render() {
        const {businesses} = this.props;
        return(
            <div className="hero2">
                <div className="container">
                    <h1>Businesses</h1>
                    <div >
                        <h5> Don't have a business? Create one now. </h5>
                        <Link to="registerBusiness">
                            <Container>
                             <Row>
                                <Col sm={{ size: 'auto', offset: 1 }}>
                                    <Button outline color="primary" size="sm">Register Business</Button>
                                </Col>
                                <Col sm={{ size: 'auto', offset: 1 }}></Col>
                            </Row>
                            </Container>
                        </Link>

                        <Container>
                            <Row>
                                <Col xs="6"><Input type="text" placeholder="Filter" /></Col>
                                <Col xs="6"><Input type="text" placeholder="Search" /></Col>
                            </Row>
                        </Container>
                    </div> 
                </div>
                <div className="container">
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
        businesses: state.fetchBusinesses.businesses
    };
}

function MapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(businessActions, dispatch)
    };
}

export default connect(MapStateToProps, MapDispatchToProps)(BusinessesPage);