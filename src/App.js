import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FeedbackData } from "./data/Feedbackdata";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import PropTypes from 'prop-types'; // shortcut is impt
import FeedbackForm from "./component/FeedbackForm";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import About from "./component/About";
import AboutIconLink from "./component/AboutIconLink";


function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        console.log('app ', id);
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
        console.log('app js newFeedback ', newFeedback);
    }

    return (
        <Router>
            <Header />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedbackItems={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }>
                    </Route>
                    <Route path='/about' element={<About/>} />
                </Routes>

                <AboutIconLink/>
            </div>
        </Router>
    )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string
}

export default App;