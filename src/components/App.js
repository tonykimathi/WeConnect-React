import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                <Header />
                {this.props.children}
                <Footer />
                </div>
            </div>
        );
    } 
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;