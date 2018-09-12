import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as businessActions from '../../actions/businessActions';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

class RegisterBusinessPage extends React.Component {
    constructor() {
        super();
        this.state = {
            business_name: '',
            description: '',
            category: '',
            location: ''
        };
      }
    handleChange = e => {
        let value = {};
        value[e.target.name] = e.target.value;
        this.setState(value);
    }

    addBusiness = e => {
        e.preventDefault();
        const business_name = this.state.business_name;
        const description = this.state.description;
        const category = this.state.category;
        const location = this.state.location;
        console.log(this.props)
        const auth_token = this.props.token;
        this.props.actions.createBusiness({business_name, description, category, location, auth_token})
    }
    
    render() {
        return(
            <div className="hero">
                <div className="fcontainer">
                    <Form onSubmit={this.addBusiness}>
                    <h1>Register Business</h1>

                    <div className="fcontainer">
                    <FormGroup>
                        <Label>Business Name</Label>
                        <Input type="text" onChange={this.handleChange} placeholder="Business Name" name="business_name" required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="text" onChange={this.handleChange} placeholder="Description" name="description" required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Category</Label>
                        <Input type="text" onChange={this.handleChange} placeholder="Category" name="category" required />
                    </FormGroup>

                    <FormGroup>
                        <Label>Location</Label>
                        <Input type="text" onChange={this.handleChange} placeholder="Location" name="location" required />
                    </FormGroup>

                        <Button type="submit">Submit</Button>
                    </div>

                    <div style={{backgroundColor: '#f1f1f1'}}>
                        <Link to="businesses"><Button type="button" className="cancelbtn">Cancel</Button></Link>
                    </div>
                    </Form>

                </div>
            </div>
        );
    }
}

RegisterBusinessPage.propTypes = {
    actions: PropTypes.object.isRequired,
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(businessActions, dispatch)
    };
}


function mapStateToProps(state, ownProps) {
    return {
        token: state.Login.auth_token
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterBusinessPage);