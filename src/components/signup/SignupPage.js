import React from 'react';
import {connect} from 'react-redux';
import * as registerActions from '../../actions/registerActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

class SignupPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            confirm_password: ''
        };
      }
    handleChange = e => {
        let value = {};
        value[e.target.name] = e.target.value;
        this.setState(value);
    }

    Register = e => {
        e.preventDefault();
        const username = this.state.username;
        const email = this.state.email;
        const password = this.state.password;
        const confirm_password = this.state.confirm_password;
        console.log(this.props)
        this.props.actions.registerUser({username, email, password, confirm_password})
    }

    render() {
        return(
          <div>
            <div className="hero">
                <div className="fcontainer">
                    <form onSubmit={this.Register}>
                        <span className="formtitle">Signup Form</span>

                        <div className="fcontainer">
                            <label><b>Username</b></label>
                            <input type="text" onChange={this.handleChange} placeholder="Enter Username" name="username" required />

                            <label><b>Email</b></label>
                            <input type="text" onChange={this.handleChange} placeholder="Enter Email" name="email" required />

                            <label><b>Password</b></label>
                            <input type="password" onChange={this.handleChange} placeholder="Enter Password" name="password" required />

                            <label><b>Confirm Password</b></label>
                            <input type="password" onChange={this.handleChange} placeholder="Confirm Password" name="confirm_password" required />

                            <button type="submit" >Sign Up</button>
                            
                        </div>
                    </form>
                </div>
            </div>
          </div>
        );
    }
}

SignupPage.propTypes = {
    // user: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(registerActions, dispatch)
    };
}


function mapStateToProps(state, ownProps) {
    return {
        state: state.Register
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);