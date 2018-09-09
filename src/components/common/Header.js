import React, {Fragment} from 'react';
import { Link, IndexLink } from 'react-router';
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
                <div className="container">
                    <nav>
                        <ul className="nav">
                            <li><IndexLink to="/" activeClassName="active">WeConnect</IndexLink></li>
                            <li><Link to="businesses" activeClassName="active">Businesses</Link></li>
                            {this.props.stat.loggedIn ? (
                            <Fragment>
                            <li><Link to="login" onClick={this.Logout} activeClassName="active">Logout</Link></li>
                            </Fragment>
                            ) : (
                            <Fragment>
                            <li><Link to="signup" activeClassName="active">Sign Up</Link></li>
                            <li><Link to="login" activeClassName="active">Login</Link></li>
                            </Fragment>
                            )}
                        </ul>
                    </nav>
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
        stat: state.Logout
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);