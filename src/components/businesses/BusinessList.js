import React from 'react';
import BusinessListRow from './BusinessListRow';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const BusinessList = ({businesses}) => {
    return (
        <div className="container">
            <input type="text" id="myInput" placeholder="Filter" />
            <input type="text" id="myInput2" placeholder="Search" />

            <table className="table">
                <thead>
                <tr >
                <th style={{width: '20%'}}>Name</th>
                <th style={{width: '40%'}}>Description</th>
                <th style={{width: '20%'}}>Category</th>
                <th style={{width: '20%'}}>Location</th>
                </tr>
                </thead>
                <tbody>
                    {businesses.map(business => 
                    <BusinessListRow key={business.id} business={business}/> )}
                </tbody>
            </table>
        </div>
    );
};
BusinessList.propTypes = {
    businesses: PropTypes.array.isRequired
}
function mapStateToProps (state) {
    return {
      businesses: state.businesses,
    };
  };

export default connect(mapStateToProps)(BusinessList);