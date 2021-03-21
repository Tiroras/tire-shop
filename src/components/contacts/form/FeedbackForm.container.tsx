import React from 'react';
import FeedbackReduxForm from "./FeedbackForm";
import {connect} from "react-redux";
import {IContacts} from "../../../interfaces/reducers/IContacts";
import {ReducerType} from "../../../redux/reducer";
import {feedbackAPI} from "../../../api/api";


interface IProps {
  data: IContacts
}

const FeedbackFormContainer = (props) => {
  const handleSubmit = (values) => {
    feedbackAPI.postFeedback({
      email: values.email,
      userName: values.userName,
      number: values.number,
      message: values.message
    })
  }

  return(
    <FeedbackReduxForm
      onSubmit={handleSubmit}
    />
  )
}

let mapStateToProps = (state: ReducerType) => ({
  data: state.contactsData.contacts
})

export default connect(mapStateToProps)(FeedbackFormContainer)