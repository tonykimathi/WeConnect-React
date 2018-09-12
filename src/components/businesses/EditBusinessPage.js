import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {browserHistory} from 'react-router';
import * as businessActions from '../../actions/businessActions';
import {bindActionCreators} from 'redux';

class EditBusinessPage extends Component {  
    constructor(props) {
    super(props);
    this.state = {
      edited: {}
    };
    }

    componentDidMount() {
      if (!this.props.login.loggedIn) {
        browserHistory.push('/login');
      }
      const business_id = this.props.params.id;
      console.log(this.props)
      this.props.actions.getSingleBusiness(business_id);
    }

    handleChange = e => {
      const val = {};
      const edited = this.state.edited;
      edited[e.target.name] = true;
      val['edited'] = edited;
      val[e.target.name] = e.target.value;
      this.setState(val);
    };

  
    getValue = name => {
      if (this.state.edited[name]) {
        return this.state[name];
      }
      const business = this.props.business;
      return business.business[name] || '';
    };

    editBusiness = e => {
      e.preventDefault();
      const business_id = this.props.params.id;
      const auth_token = this.props.login.auth_token;
      const business_name = this.getValue('business_name');
      const description = this.getValue('description');
      const category = this.getValue('category');
      const location = this.getValue('location');
      this.props.actions.editBusiness({business_id, business_name,
        description, category, location, auth_token});
      this.forceUpdate();
    };

    render() {
      return (
          <div className="hero">
              <div className="fcontainer">
                  <form onSubmit={this.editBusiness}>
                      <span className="formtitle">Edit Business</span>

                      <div className="fcontainer">
                          <label><b>Business Name</b></label>
                          <input type="text" value={this.getValue('business_name')} onChange={this.handleChange} placeholder="Business Name" name="business_name" required />

                          <label><b>Description</b></label>
                          <input type="text" value={this.getValue('description')} onChange={this.handleChange} placeholder="Description" name="description" required />

                          <label><b>Category</b></label>
                          <input type="text" value={this.getValue('category')} onChange={this.handleChange} placeholder="Category" name="category" required />

                          <label><b>Location</b></label>
                          <input type="text" value={this.getValue('location')} onChange={this.handleChange} placeholder="Location" name="location" required />

                          <button type="submit" className="btn btn-success">Submit</button>
                      </div>

                      <div className="fcontainer" style={{backgroundColor: '#f1f1f1'}}>
                          <Link to="businesses"><button type="button" className="cancelbtn">Cancel</button></Link>
                      </div>
                  </form>
                  {browserHistory.push(`/businesses/${this.business_id}`)}
              </div>
          </div>
      );
    }
  }


  const mapStateToProps = state => {
    return {
      fetchSingleBusiness: state.fetchSingleBusiness,
      business: state.Business,
      login: state.Login
    };
  };

  function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(businessActions, dispatch)
    };
  }


  EditBusinessPage.propTypes = {
      params: PropTypes.object,
      business: PropTypes.object,
      fetchSingleBusiness: PropTypes.object,
      login: PropTypes.object,

  };

  export default connect(mapStateToProps, mapDispatchToProps)(EditBusinessPage);
