import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav>
                  <ul className="nav">
                    <li><IndexLink to="/" activeClassName="active">WeConnect</IndexLink></li>
                    <li><Link to="businesses" activeClassName="active">Businesses</Link></li>
                    <li><Link to="signup" activeClassName="active">Sign Up</Link></li>
                    <li><Link to="login" activeClassName="active">Login</Link></li>
                  </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;