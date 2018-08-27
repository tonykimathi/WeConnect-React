import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return(
          <div>
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
          </div>
        );
    }
}
export default HomePage;