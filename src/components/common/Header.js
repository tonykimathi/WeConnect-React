import React, {Fragment} from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 } from 'reactstrap';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as logoutActions from '../../actions/logoutActions';

class Header extends React.Component {
    Logout = e => {
        e.preventDefault();
        const auth_token = this.props.auth_token;
        this.props.actions.logoutUser({auth_token});
        this.forceUpdate();
        console.log(this.props)
    }
    render() {
        return (
            <header className="header">
                <div>
                <Navbar color="blue" dark expand="md">
                <NavbarBrand href="/" >WeConnect</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/businesses/" >Businesses</NavLink>
                        </NavItem>
                        {this.props.stat.loggedIn ? (
                        <Fragment >
                        <NavItem>
                            <NavLink href="/login" onClick={this.Logout} >Logout</NavLink>
                        </NavItem>
                        </Fragment >
                        ) : (
                        <Fragment >
                        <NavItem>
                            <NavLink href="/signup" >Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login" >Login</NavLink>
                        </NavItem>
                        </Fragment >
                        )}
                    </Nav>
                </Navbar>
            </div>
            </header>
            );
}
};
Header.propTypes = {
    actions: PropTypes.object.isRequired,
    stat: PropTypes.object
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(logoutActions, dispatch)
    };
}

function mapStateToProps(state, ownProps) {
    return {
        stat: state.Login
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);