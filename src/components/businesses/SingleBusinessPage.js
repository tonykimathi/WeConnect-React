import React, {Fragment} from 'react';
import {Link} from 'react-router';
import { Card, CardTitle, FormGroup, Label, Input, CardBody, CardImg, Row, Col,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Container} from 'reactstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as businessActions from '../../actions/businessActions';
import * as reviewActions from '../../actions/reviewActions';
import PropTypes from 'prop-types';
import businessImage from '../../images/we-connect-hero.jpg';
import ReviewList from './ReviewList';

class SingleBusinessPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            body: ''
          };
    }

    toggle = () => {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    };

    fetchSingleBusiness = (business_id) => {
        this.props.actions.getSingleBusiness(business_id);
    };

    componentDidMount() {
        const business_id = this.props.params.id;
        this.fetchSingleBusiness(business_id);
      }

    deleteBusiness = () => {
        const auth_token = this.props.token;
        console.log("kjsdhfnjsdnfoooo "+auth_token);
        const business_id = this.props.business.business.business_id;
        this.props.actions.deleteBusiness(auth_token, business_id);
    };

    addReview = e => {
        e.preventDefault();
        const auth_token = this.props.token;
        const business_id = this.props.business.business.business_id;
        const body = this.reviews.body;
        this.props.reviewActions.createReview({ auth_token, business_id, body });
        this.forceUpdate();
    };

    handleChange = e => {
        let value = {};
        value[e.target.name] = e.target.value;
        this.setState(value);
    }

    render() {
        const {business} = this.props;
        const {reviews}= this.props;
        return(
            <div className="hero2">
                <div className="container">
                <h1>Business</h1>
                </div>
                <div align="center">
                <Card body outline color="secondary" align="justify" className="col-sm-8">
                <CardTitle className="content-center">Business Details</CardTitle>
                    <Container>
                        <Row>
                            <Col xs="8"><CardImg top src={businessImage} alt="Business image" /></Col>
                            <Col xs="4">
                                {this.props.login.loggedIn && !this.props.login.error ? (
                                <div className="action">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle className="col-sm-6" caret>Actions</DropdownToggle>
                                        <DropdownMenu>
                                            <div >
                                                <DropdownItem divider />
                                                <DropdownItem >
                                                    <Link to={`/editBusiness/${business.business_id}`}> Edit </Link>
                                                </DropdownItem>
                                                <DropdownItem onClick={this.deleteBusiness}> Delete </DropdownItem>
                                            </div>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                                ) : null}
                            </Col>
                        </Row>
                    </Container>
                    <hr />
                    <Fragment>
                        <CardBody>
                        <ReviewList reviews = {reviews} />
                        <FormGroup className="col-sm-6">
                            <Label for="review">Review Business</Label>
                            <Input onChange={this.handleChange} type="textarea" name="text" id="review" />
                            <br/>
                            <Button className="col-sm-4" onClick={this.addReview} color="secondary" size="sm" >Publish</Button>
                        </FormGroup>
                        
                        </CardBody>
                    </Fragment>
                    <Link to={`/businesses`} className="btn btn-secondary" role="button">
                        Back
                    </Link>
                </Card>
                </div>
                
            </div>
        );
    }
}

SingleBusinessPage.propTypes = {
    business: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    token: PropTypes.string,
    login: PropTypes.object,
    reviews: PropTypes.array.isRequired
};

function MapStateToProps(state, ownProps) {
    return {
        business: state.fetchSingleBusiness.business,
        token: state.Business.auth_token,
        login: state.Login,
        reviews: state.fetchReviews.reviews
    };
}

function MapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(businessActions, dispatch),
        reviewActions: bindActionCreators(reviewActions, dispatch)
    };
}

export default connect(MapStateToProps, MapDispatchToProps)(SingleBusinessPage);