import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
          <div>
            <header className="header">
                <div className="container">
                    <nav>
                        <ul className="nav">
                        <li className="WeConnect"><a href="index.html">WeConnect</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="hero">
                <div className="fcontainer">
                    <form action="business.html">
                        <span className="formtitle">Login Form</span>

                        <div className="fcontainer">
                            <label><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required />

                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <button type="submit" >Login</button>
                            <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
                        </div>

                        <div className="fcontainer">
                            <Link to="index"><button type="button" className="cancelbtn">Cancel</button></Link>
                            <span className="psw"><a href="#">Forgot password?</a></span>
                        </div>
                    </form>
                </div>
            </div>

            <footer classNameName="footer">
                <div classNameName="container">
                    <p>Copyright &copy; 2018. All rights reserved.</p>
                </div>
            </footer>
          </div>
        );
    }
}
export default HomePage;