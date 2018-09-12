import React from 'react';
import PropTypes from 'prop-types';
import ReviewListRow from './ReviewListRow';

const ReviewList = ({reviews}) => {
    return (
        <div className="container">
            <table className="table">
                <thead>
                <tr >
                <th >Reviews</th>
                </tr>
                </thead>
                <tbody>
                    {reviews.map(review => 
                    <ReviewListRow key={review.review_id} review={review}/> )}
                </tbody>
            </table>
        </div>
    );
};
ReviewList.propTypes = {
    reviews: PropTypes.array.isRequired
}

export default ReviewList;