import React from 'react';
import FeedbackReduxForm from "./FeedbackForm";
import {connect} from "react-redux";
import {IContacts} from "../../../interfaces/reducers/IContacts";
import {ReducerType} from "../../../redux/reducer";


interface IProps {
  data: IContacts
}

const FeedbackFormContainer = (props) => {
  return(
    <FeedbackReduxForm
    />
  )
}

let mapStateToProps = (state: ReducerType) => ({
  data: state.contactsData.contacts
})

export default connect(mapStateToProps)(FeedbackFormContainer)