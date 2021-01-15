import React from "react";
import MainLayout from "../../components/general/layouts/mainlayout/MainLayout";
import ServicesComponent from "../../components/services/ServicesComponent";


export default function Home() {
  return (
    <MainLayout>
      <ServicesComponent />
    </MainLayout>
  )
}