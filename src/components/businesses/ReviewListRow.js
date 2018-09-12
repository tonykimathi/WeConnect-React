import React from 'react';
import PropTypes from 'prop-types';

const ReviewListRow = ({review}) => {
    return (
        <tr>
            <td>{review.body}</td>
            <td></td>
        </tr>
    );
};

ReviewListRow.propTypes = {
    review: PropTypes.object.isRequired
}
export default ReviewListRow;