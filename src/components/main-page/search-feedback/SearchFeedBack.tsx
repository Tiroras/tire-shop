import React from 'react';
import SearchFeedbackReduxForm from "./form/SearchFeedbackForm";
import classes from "./SearchFeedBack.module.css";


const SearchFeedBack = () => {
  return(
    <div className={classes.layout}>
      <h3 className={classes.header}>Не смогли что-то найти? Напишите нам</h3>
      <div className={classes.container}>
        <span className={classes.img}>
          <img src={"images/feedbackform.png"} />
        </span>
        <span className={classes.form}>
          <SearchFeedbackReduxForm />
        </span>
      </div>
    </div>
  )
}

export default SearchFeedBack;