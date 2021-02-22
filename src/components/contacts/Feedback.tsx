import React from 'react'
import FeedbackFormContainer from "./form/FeedbackForm.container";
import classes from "./Feedback.module.css";


const Feedback = () => {
  return(
    <div className={classes.layout}>
      <h3>Обратная связь</h3>
      <div>
        <FeedbackFormContainer />
      </div>
    </div>
  )
}

export default Feedback;