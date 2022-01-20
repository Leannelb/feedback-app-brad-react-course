import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is from the context',
            rating: 5
        },
        {
            id: 2,
            text: 'This is feedback 2',
            rating: 4
        },
        {
            id: 3,
            text: 'This is feedback 3',
            rating: 7
        }
    ]);
    
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
        )
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
        console.log('app js newFeedback ', newFeedback);
    }

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        console.log('app ', id);
    }
    
    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
        { children }
    </FeedbackContext.Provider>
}

export default FeedbackContext;