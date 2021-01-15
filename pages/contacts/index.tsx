import React from "react";
import MainLayout from "../../components/general/layouts/mainlayout/MainLayout";
import Contacts from "../../components/contacts/Contacts";


export default function Home() {
  return (
    <MainLayout>
      <Contacts />
    </MainLayout>
  )
}