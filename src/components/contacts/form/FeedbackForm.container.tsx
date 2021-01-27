import React from 'react';
import FeedbackReduxForm from "./FeedbackForm";
import {connect} from "react-redux";
import {IContacts} from "../../../interfaces/reducers/IContacts";


interface IProps {
  data: IContacts
}

const FeedbackFormContainer = (props) => {
  return(
    <FeedbackReduxForm
      data={props.data}
    />
  )
}

let mapStateToProps = (state) => ({
  data: state.contactsData.contacts
})

export default connect(mapStateToProps)(FeedbackFormContainer)