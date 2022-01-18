import PropTypes from 'prop-types';

function FeedbackStats({ feedbackItems }) {
    // calculate ratings average
    let average = feedbackItems.reduce((total, cur) => {
        return total + cur.rating
    }, 0) / feedbackItems.length;
    
    let averageToFixed = average.toFixed(1);

    return (
        <div className="feedback-stats">
            <h4>{feedbackItems.length} Reviews</h4>
            <h4>Average Rating: { isNaN(averageToFixed) ? 0 : averageToFixed }</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedbackItems: PropTypes.array.isRequired
}

export default FeedbackStats
