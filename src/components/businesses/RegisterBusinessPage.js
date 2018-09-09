import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as businessActions from '../../actions/businessActions';

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
        const auth_token = this.props.state;
        this.props.actions.createBusiness({business_name, description, category, location, auth_token})
    }
    
    render() {
        return(
            <div className="hero">
                <div className="fcontainer">
                    <form onSubmit={this.addBusiness}>
                    <span className="formtitle">Registration Form</span>

                    <div className="fcontainer">
                        <label><b>Name</b></label>
                        <input type="text" onChange={this.handleChange} placeholder="Business Name" name="business_name" required />

                        <label><b>Description</b></label>
                        <input type="text" onChange={this.handleChange} placeholder="Description" name="description" required />

                        <label><b>Category</b></label>
                        <input type="text" onChange={this.handleChange} placeholder="Category" name="category" required />

                        <label><b>Location</b></label>
                        <input type="text" onChange={this.handleChange} placeholder="Location" name="location" required />

                        <button type="submit">Submit</button>
                    </div>

                    <div className="fcontainer" style={{backgroundColor: '#f1f1f1'}}>
                        <Link to="businesses"><button type="button" className="cancelbtn">Cancel</button></Link>
                    </div>
                    </form>

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
        state: state.Business.auth_token
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterBusinessPage);