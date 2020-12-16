import React from "react";
import MainLayout from "../../public/components/layouts/mainlayout/MainLayout";
import ContactInfo from "../../public/components/contacts/ContactInfo";
import Feedback from "../../public/components/contacts/Feedback";


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