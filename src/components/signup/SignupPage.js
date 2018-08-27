import React from 'react';

class SignupPage extends React.Component {
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

                            <label><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" required />

                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required />

                            <label><b>Confirm Password</b></label>
                            <input type="text" placeholder="Confirm Password" name="cpsw" required />

                            <button type="submit" >Sign Up</button>
                            <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                            </label>
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
export default SignupPage;