import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
          <div>
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
                            <span className="psw"><Link to="forgotPassword">Forgot password?</Link></span>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        );
    }
}
export default HomePage;