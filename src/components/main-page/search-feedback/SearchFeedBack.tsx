import React from 'react';
import SearchFeedbackReduxForm from "./form/SearchFeedbackForm";
import classes from "./SearchFeedBack.module.css";


const SearchFeedBack = () => {
  return(
    <div className={classes.layout}>
      <span className={classes.half}>
        Здесь будет картинка
      </span>
      <span className={classes.half}>
        <SearchFeedbackReduxForm />
      </span>
    </div>
  )
}

export default SearchFeedBack;