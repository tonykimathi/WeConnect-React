import React from 'react';
import {Link} from 'react-router';
import * as loginActions from '../../actions/loginActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import { Button, Form, Label, Input, FormGroup } from 'reactstrap';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
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
            <div className="hero3">
                <div className="fcontainer">
                    <Form onSubmit={this.Login}>
                        <h1>Login Here</h1>

                        <div className="fcontainer">
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" onChange={this.handleChange} placeholder="Enter Email" name="email" required />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" onChange={this.handleChange} placeholder="Enter Password" name="password" required />
                        </FormGroup>

                            <Button type="submit" >Login</Button>
                         </div>

                        <div className="fcontainer">
                            <Link to="index"><Button type="Button" className="cancelbtn">Cancel</Button></Link>
                            <span className="psw"><Link to="forgotPassword">Forgot password?</Link></span>
                        </div>
                    </Form>
                </div>
            </div>
          </div>
        );
    }
}
LoginPage.propTypes = {
    actions: PropTypes.object.isRequired
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
