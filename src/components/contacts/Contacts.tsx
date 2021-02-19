import React from 'react';
import Feedback from "./Feedback";
import ContactInfo from "./ContactInfo";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Contacts = (props) => {
  return(
    <div>
      <div>
        <h2>Контакты</h2>
      </div>
      <Layout className={props.className}>
        <ContactInfo />
        <Feedback />
      </Layout>
    </div>
  )
}

export default Contacts;