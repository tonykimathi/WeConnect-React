import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    } 
}

App.PropTypes = {
    children: PropTypes.object.isRequired
};

export default App;