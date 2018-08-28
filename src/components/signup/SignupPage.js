import React from 'react';
import {connect} from 'react-redux';
import * as registerActions from '../../actions/registerActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

class SignupPage extends React.Component {
    constructor() {
        super();
        this.state = {
        };
        this.Register = this.Register.bind(this)
      }

    Register() {
        this.props.registerUser(this.state.user)
    }

    render() {
        return(
          <div>
            <div className="hero">
                <div className="fcontainer">
                    <form onSubmit={this.Register}>
                        <span className="formtitle">Login Form</span>

                        <div className="fcontainer">
                            <label><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required />

                            <label><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />

                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <label><b>Confirm Password</b></label>
                            <input type="password" placeholder="Confirm Password" name="cpsw" required />

                            <button type="submit" >Sign Up</button>
                            <label>
                            <input type="checkbox" defaultChecked name="remember" /> Remember me
                            </label>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        );
    }
}

SignupPage.propTypes = {
    user: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(registerActions, dispatch)
    };
}


function mapStateToProps(state, ownProps) {
    return {
        user: state.Register
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);