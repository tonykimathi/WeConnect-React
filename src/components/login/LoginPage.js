import React from 'react';
import {Link} from 'react-router';
import * as loginActions from '../../actions/loginActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.Login = this.Login.bind(this)
      }

    handleChange = e => {
        let value = {};
        value[e.target.name] = e.target.value;
        this.setState(value);
    }
    Login = e => {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        console.log(this.props)
        this.props.actions.loginUser({email, password})
    }
    render() {
        return(
          <div>
            <div className="hero">
                <div className="fcontainer">
                    <form onSubmit={this.Login}>
                        <span className="formtitle">Login Form</span>

                        <div className="fcontainer">
                            <label><b>Email</b></label>
                            <input type="email" onChange={this.handleChange} placeholder="Enter Email" name="email" required />

                            <label><b>Password</b></label>
                            <input type="password" onChange={this.handleChange} placeholder="Enter Password" name="password" required />

                            <button type="submit" >Login</button>
                        </div>

                        <div className="fcontainer">
                            <Link to="index"><button type="button" className="cancelbtn">Cancel</button></Link>
                            <span className="psw"><Link to="forgotPassword">Forgot password?</Link></span>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        );
    }
}
LoginPage.propTypes = {
    actions: PropTypes.object.isRequired,
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch)
    };
}


function mapStateToProps(state, ownProps) {
    return {
        state: state.Login
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
