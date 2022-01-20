import { useState, useEffect, useContext } from 'react';
import Button from '../shared/Button';
import Card from '../shared/Card';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState();
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [message, setMessage] = useState('');

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
        console.log('hi rendered')
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 chars');
            setBtnDisabled(true);
        } else {
            setMessage(null)
            setBtnDisabled(false);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            console.log('newFeedback ', newFeedback);
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }
            setText('');
        }
    }
    
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={ (rating) => setRating(rating)}/>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder='Write a review'
                        value={ text }
                        onChange={handleTextChange}
                    ></input>
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{ message }</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
