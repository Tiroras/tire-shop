import React from 'react';
import Feedback from "./Feedback";
import ContactInfo from "./ContactInfo";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Contacts = () => {
  return(
    <div>
      <div>
        <h2>Контакты</h2>
      </div>

      <Layout>
        <ContactInfo />
        <Feedback />
      </Layout>
    </div>
  )
}

export default Contacts;