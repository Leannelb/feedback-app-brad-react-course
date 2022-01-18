import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from "./FeedbackItem"; 
import PropTypes from 'prop-types';

function FeedbackList({ feedbackProp, deleteHandler }) {

    if (!feedbackProp || feedbackProp.length === 0) {
        return <p>No feedback items</p>
    }
    
    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedbackProp.map((item) => (
                  <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                <FeedbackItem
                    key={item.id}
                    item={item}
                    handleDelete={deleteHandler} />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}
{/* retrun statement without animation
     <div className="feedback-list">
{feedbackProp.map((item) => (
    <FeedbackItem
        key={item.id}
        item={item}
        handleDelete={deleteHandler} />
))}
</div> */}

FeedbackList.propTypes = {
    feedbackProp: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList
