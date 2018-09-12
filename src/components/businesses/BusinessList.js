import React from 'react';
import BusinessListRow from './BusinessListRow';
import PropTypes from 'prop-types';


const BusinessList = ({businesses}) => {
    return (
        <div className="container">
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
                    <BusinessListRow key={business.business_id} business={business}/> )}
                </tbody>
            </table>
        </div>
    );
};
BusinessList.propTypes = {
    businesses: PropTypes.array.isRequired
}

export default BusinessList;