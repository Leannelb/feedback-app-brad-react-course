import { useContext } from 'react';
import FeedbackContext  from '../context/FeedbackContext';

function FeedbackStats() {
    const { feedback } = useContext(FeedbackContext);
    // calculate ratings average
    let average = feedback.reduce((total, cur) => {
        return total + cur.rating
    }, 0) / feedback.length;
    
    let averageToFixed = average.toFixed(1);

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: { isNaN(averageToFixed) ? 0 : averageToFixed }</h4>
        </div>
    )
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackStats
