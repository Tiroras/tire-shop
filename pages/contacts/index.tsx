import React from "react";
import MainLayout from "../../src/components/general/layouts/mainlayout/MainLayout";
import Contacts from "../../src/components/contacts/Contacts";


export default function Home() {
  return (
    <MainLayout>
      <Contacts />
    </MainLayout>
  )
}