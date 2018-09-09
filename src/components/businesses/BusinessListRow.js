import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';

const BusinessListRow = ({business}) => {
    return (
        <tr>
            <td><Link to={'/businesses/' + business.id}>{business.title}</Link></td>
            <td>{business.description}</td>
            <td>{business.location}</td>
            <td>{business.category}</td>
            <td></td>
        </tr>
    );
};

BusinessListRow.propTypes = {
    business: PropTypes.object.isRequired
}
export default BusinessListRow;