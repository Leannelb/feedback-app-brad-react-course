import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Card from "./shared/Card";
import { FeedbackProvider } from "./context/FeedbackContext";
import Page1 from "./component/Page1";
import PropTypes from 'prop-types'; // shortcut is impt
import FeedbackForm from "./component/FeedbackForm";
import Header from "./component/Header";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import About from "./component/About";
import AboutIconLink from "./component/AboutIconLink";


function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }>
                        </Route>
                        <Route path='/about' element={<About />} />
                        <Route path='/post/*' element={<Page1 />} />
                    </Routes>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedbackProvider>
    )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string
}

export default App;