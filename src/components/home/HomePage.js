import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
          <div>
            <div className="header">
                <div className="container">
                    <nav>
                        <ul className="nav">
                        <li className="WeConnect"><Link to="index">WeConnect</Link></li>
                        <li className="WeConnect"><Link to="businesses">Businesses</Link></li>
                        <li className="signup"><Link to="signup" className="right">Sign Up</Link></li>
                        <li className="login"><Link to="login" className="right">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="hero">
                <div className="container">
                    <div className="col-md-6">
                        <p className="home-title">WeConnect</p>
                            <p className="home-body"><br />
                                We bring businesses and <br />
                                users together, for the <br />
                                ultimate business experience.
                            </p>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <p>Copyright &copy; 2018. All rights reserved.</p>
                </div>
            </footer>
          </div>
        );
    }
}
export default HomePage;