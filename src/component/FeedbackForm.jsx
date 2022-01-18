import { useState } from 'react';
import Button from '../shared/Button';
import Card from '../shared/Card';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [message, setMessage] = useState('');
    
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
            handleAdd(newFeedback);
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
