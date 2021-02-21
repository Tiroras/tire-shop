import React from 'react';
import Feedback from "./Feedback";
import ContactInfo from "./ContactInfo";
import classes from "./Contacts.module.css";


const Contacts = () => {
  return(
    <div>
      <div>
        <h2>Контакты</h2>
      </div>
      <div className={classes.layout}>
        <ContactInfo />
        <Feedback />
      </div>
    </div>
  )
}

export default Contacts;