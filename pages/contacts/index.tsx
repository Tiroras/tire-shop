import React from "react";
import MainLayout from "../../components/layouts/mainlayout/MainLayout";
import ContactInfo from "../../components/contacts/ContactInfo";
import Feedback from "../../components/contacts/Feedback";


export default function Home() {
  return (
    <MainLayout>
      <div>
        <h2>Контакты</h2>

        <div>
          <ContactInfo />
          <Feedback />
        </div>

      </div>
    </MainLayout>
  )
}